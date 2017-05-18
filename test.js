import fs from 'fs';
import test from 'ava';
import execa from 'execa';

test(async t => {
	try {
		fs.unlinkSync('.last-photo');
	} catch (err) {}

	await t.notThrows(execa('./cli.js'));
});
