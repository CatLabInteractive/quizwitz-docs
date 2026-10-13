// The docs site has no blog (blog: false), but `docusaurus write-translations`
// still emits the classic theme's theme.blog.* keys into code.json. Strip them
// so they are not uploaded to Crowdin, where every string counts towards the plan.
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const i18nDir = new URL('../i18n/', import.meta.url).pathname;
for (const locale of readdirSync(i18nDir)) {
	const file = join(i18nDir, locale, 'code.json');
	if (!existsSync(file)) continue;
	const raw = readFileSync(file, 'utf8');
	const data = JSON.parse(raw);
	const kept = Object.fromEntries(Object.entries(data).filter(([key]) => !key.startsWith('theme.blog.')));
	const removed = Object.keys(data).length - Object.keys(kept).length;
	if (removed > 0) {
		writeFileSync(file, JSON.stringify(kept, null, 2) + (raw.endsWith('\n') ? '\n' : ''));
		console.log(`${file}: removed ${removed} theme.blog.* keys`);
	}
}
