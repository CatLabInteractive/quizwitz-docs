// Lists translated files that are missing, or whose English source has a newer
// commit than the translation. The translations live in this repo now (no more
// Crowdin), so this is the "what still needs translating" view.
//
//   node scripts/stale-translations.mjs          all locales
//   node scripts/stale-translations.mjs nl de    only these locales
//
// It compares last-commit times, so it is a hint, not proof: a translation
// committed after the English change counts as up to date even when it did not
// carry that change over. Commit English and translation updates in the same PR.
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const i18nDir = join(root, 'i18n');

function walk(dir) {
	return readdirSync(dir).flatMap((name) => {
		const path = join(dir, name);
		return statSync(path).isDirectory() ? walk(path) : [path];
	});
}

// Newest commit time per path, from one pass over the history.
const lastCommit = new Map();
let time = 0;
const log = execFileSync('git', ['log', '--format=@%ct', '--name-only', '--', 'docs', 'i18n'], { cwd: root, encoding: 'utf8', maxBuffer: 1 << 28 });
for (const line of log.split('\n')) {
	if (line.startsWith('@')) time = Number(line.slice(1));
	else if (line && !lastCommit.has(line)) lastCommit.set(line, time);
}

// English source -> translated path inside i18n/<locale>/.
const sources = [
	...walk(join(root, 'docs'))
		.filter((path) => /\.(md|mdx|json)$/.test(path))
		.map((path) => [relative(root, path), (locale) => join('i18n', locale, 'docusaurus-plugin-content-docs/current', relative(join(root, 'docs'), path))]),
	...walk(join(i18nDir, 'en'))
		.filter((path) => path.endsWith('.json'))
		.map((path) => [relative(root, path), (locale) => join('i18n', locale, relative(join(i18nDir, 'en'), path))]),
];

const requested = process.argv.slice(2);
const locales = requested.length ? requested : readdirSync(i18nDir).filter((name) => name !== 'en').sort();

let count = 0;
for (const locale of locales) {
	for (const [source, target] of sources) {
		const translated = target(locale);
		const sourceTime = lastCommit.get(source) ?? Infinity;
		if (!existsSync(join(root, translated))) {
			console.log(`${locale}\tmissing\t${translated}`);
			count++;
		} else if ((lastCommit.get(translated) ?? 0) < sourceTime) {
			console.log(`${locale}\tstale\t${translated}`);
			count++;
		}
	}
}
console.log(`${count} file(s) missing or older than their English source.`);
