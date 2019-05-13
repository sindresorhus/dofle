#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const meow = require('meow');
const open = require('open');
const randomItem = require('random-item');

meow(`
	Usage
	  $ dofle
`);

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
