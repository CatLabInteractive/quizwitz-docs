// Labels that are names of other services (Discord) must never be translated,
// but Crowdin machine translation sometimes does it anyway (nl "Onenigheid").
// Before every build, put any translated copy of such a label back to English.
// The glossary in quizwitz-strategy (strategy/i18n/glossary.md) lists the terms.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const PROTECTED = ['Discord'];

const i18nDir = new URL('../i18n/', import.meta.url).pathname;
const enDir = join(i18nDir, 'en');

function jsonFiles(dir) {
	return readdirSync(dir).flatMap((name) => {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) return jsonFiles(path);
		return name.endsWith('.json') ? [path] : [];
	});
}

for (const enFile of jsonFiles(enDir)) {
	const en = JSON.parse(readFileSync(enFile, 'utf8'));
	const keys = Object.keys(en).filter((key) => PROTECTED.includes(en[key]?.message));
	if (keys.length === 0) continue;
	const rel = relative(enDir, enFile);
	for (const locale of readdirSync(i18nDir)) {
		if (locale === 'en') continue;
		const file = join(i18nDir, locale, rel);
		let raw;
		try { raw = readFileSync(file, 'utf8'); } catch { continue; }
		const data = JSON.parse(raw);
		let changed = false;
		for (const key of keys) {
			if (data[key] && data[key].message !== en[key].message) {
				console.log(`${locale}/${rel}: ${key} "${data[key].message}" -> "${en[key].message}"`);
				data[key].message = en[key].message;
				changed = true;
			}
		}
		if (changed) writeFileSync(file, JSON.stringify(data, null, 2) + (raw.endsWith('\n') ? '\n' : ''));
	}
}
