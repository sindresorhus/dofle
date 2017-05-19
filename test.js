import fs from 'fs';
import test from 'ava';
import execa from 'execa';

function cleanup() {
	try {
		fs.unlinkSync('.last-photo');
	} catch (err) {}
}

test(async t => {
	await t.notThrows(execa('./cli.js'));
	cleanup();
});
