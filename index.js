const puppeteer = require('puppeteer');

const getPic = async function() {
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();
	await page.goto('https://google.ca');
	await page.setViewport({ width: 1000, height: 500 });
	await page.screenshot({ path: 'google.png' });

	await browser.close();
};

getPic();
