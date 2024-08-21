import puppeteer from "puppeteer";

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://yukizemi.online/pob68H8');

  // Set screen size
  await page.setViewport({width: 1279, height: 489});

  //
  await page.waitForSelector('.Button__button__SO7tb.TextInput__button__QrvX4.Button__accent4__rpZEP');
  await page.click('.Button__button__SO7tb.TextInput__button__QrvX4.Button__accent4__rpZEP');
  console.log('pass1: ルーム入室クリック');

  await page.waitForSelector('.Button__button__SO7tb.TextInput__button__QrvX4.Button__accept__Vxz39');
  await page.click('.Button__button__SO7tb.TextInput__button__QrvX4.Button__accept__Vxz39');
  console.log('pass2: アバター承認クリック');

  await page.waitForSelector('.Button__button__SO7tb.TextInput__button__QrvX4.Button__primary__V_Unf');
  await page.click('.Button__button__SO7tb.TextInput__button__QrvX4.Button__primary__V_Unf');
  console.log('pass: マイク設定入出クリック');

  const commands = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
  while(true){
    // for(const command of commands){
    //   await page.keyboard.down(command);
    //   setTimeout(() => {
    //     page.keyboard.up(command);
    //   },4000);
    // }
    await page.keyboard.press(commands[0]);
  }
})();