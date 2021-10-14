#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import meow from 'meow';
import open from 'open';
import randomItem from 'random-item';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

meow(`
	Usage
	  $ dofle
`, {
	importMeta: import.meta,
});

const photosDirectory = path.join(__dirname, 'photos');
const photos = fs.readdirSync(photosDirectory).filter(directory => !directory.startsWith('.'));
let randomPhoto = randomItem(photos);

const lastPicPath = path.join(__dirname, '.last-photo');
if (fs.existsSync(lastPicPath) && fs.readFileSync(lastPicPath, 'utf8') === randomPhoto) {
	randomPhoto = randomItem(photos);
}

fs.writeFileSync(lastPicPath, randomPhoto);

(async () => {
	await open(path.join(photosDirectory, randomPhoto));
})();
