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

const pics = fs.readdirSync(path.join(__dirname, 'photos'));
let pic = randomItem(pics);

const lastPicPath = path.join(__dirname, '.last-pic');
if (fs.existsSync(lastPicPath) && fs.readFileSync(lastPicPath, 'utf8') === pic) {
	pic = randomItem(pics);
}
fs.writeFileSync(lastPicPath, pic);

opn(path.join('photos', pic), {wait: false}).catch(console.error);
