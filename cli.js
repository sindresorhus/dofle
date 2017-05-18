#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const meow = require('meow');
const opn = require('opn');
const randomItem = require('random-item');

meow(`
	Usage
	  $ dofle
`);

const picsDir = path.join(__dirname, 'photos');
const pics = fs.readdirSync(picsDir).filter(x => !x.startsWith('.'));
let pic = randomItem(pics);

const lastPicPath = path.join(__dirname, '.last-pic');
if (fs.existsSync(lastPicPath) && fs.readFileSync(lastPicPath, 'utf8') === pic) {
	pic = randomItem(pics);
}
fs.writeFileSync(lastPicPath, pic);

opn(path.join(picsDir, pic), {wait: false}).catch(console.error);
