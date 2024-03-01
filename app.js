import puppeteer from 'puppeteer';

export default async function (url) {
  try {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

    const html = await page.content();

    await browser.close();

    console.log('Site successfully scraped.');
    return html;
  } catch (error) {
    console.error('Site_Scraper encountered an error: ', error);
  }
}
