import puppeteer from 'puppeteer';

export default async function (url) {
  try {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

    await browser.close();

    console.log('Site successfully scraped.');
    return page;
  } catch (error) {
    console.error('Site_Scraper encountered an error: ', error);
  }
}
