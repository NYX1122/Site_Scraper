import puppeteer from 'puppeteer';

export default async function (url, elementSelector) {
  try {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

    const data = await page.evaluate((selector) => {
      const elementData = Array.from(document.querySelectorAll(selector));
      return elementData.map((element) => {
        if (element.innerText) {
          return element.innerText;
        } else {
          return element;
        }
      });
    }, elementSelector);

    await browser.close();

    console.log('Site_Scraper successfully scraped the site: ', data);

    return data;
  } catch (error) {
    console.error('Site_Scraper encountered an error: ', error);
  }
}
