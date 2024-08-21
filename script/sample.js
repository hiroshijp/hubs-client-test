//puppeteerのインポート
import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ 
    headless: true,
    protocolTimeout: 300_000,
  });
  const page = await browser.newPage();
  await page.goto('https://qiita.com/');

  await page.screenshot({ path: 'screenshot.png'});
  await page.pdf({ path: 'hn.pdf', format: 'a4' });
  await browser.close();

})();