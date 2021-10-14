import fs from 'node:fs';
import test from 'ava';
import execa from 'execa';

const cleanup = () => {
	try {
		fs.unlinkSync('.last-photo');
	} catch {}
};

test('main', async t => {
	await t.notThrowsAsync(execa('./cli.js'));
	cleanup();
});
