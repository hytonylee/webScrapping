const puppeteer = require('puppeteer');
const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

const inStream = fs.createReadStream('./name_list.txt');
const outStream = new stream();
const rl = readline.createInterface(inStream, outStream);

rl.on('line', function(line) {
	rl.pause();
	getPic(line).then(() => {
		rl.resume();
	});
});

const getPic = async function(line) {
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();
	await page.goto('https://google.ca');
	await page.focus('#fakebox-input');
	await page.keyboard.type(`${line}`);
	await page.screenshot({ path: `./screen/${name}` });

	await browser.close();
};
