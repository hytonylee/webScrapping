const puppeteer = require('puppeteer');
const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

const inStream = fs.createReadStream('./name_list.txt');
const outStream = new stream();
const rl = readline.createInterface(inStream, outStream);

// try {
// 	const data = fs.readFileSync('name_list.txt', 'utf8');
// 	console.log('Here is data: ' + data);
// } catch (err) {
// 	console.error(err);
// }

rl.on('line', function(line) {
	// process line here
	console.log(line + '2');
});

const getPic = async function() {
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();
	await page.goto('https://google.ca');
	await page.setViewport({ width: 1000, height: 500 });
	await page.screenshot({ path: 'google.png' });

	await browser.close();
};

getPic();
