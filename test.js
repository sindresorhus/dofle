import fs from 'fs';
import test from 'ava';
import execa from 'execa';

const cleanup = () => {
	try {
		fs.unlinkSync('.last-photo');
	} catch (_) {}
};

test('main', async t => {
	await t.notThrowsAsync(execa('./cli.js'));
	cleanup();
});
