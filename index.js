/****  Web Bot Code Challenge June 7th, 2019
 * hosted by Mr Mike
 * Team RedBlueRaptors
 * Created in Node JS
 *
 */

const puppeteer = require('puppeteer');

async function main() {
  console.log('Opening site...');
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--disable-notifications', '--start-maximized']
  });
  const page = await browser.newPage();

  await page.goto(
    'https://alicious.community/tech/d/web-bot-code-challenge-june-7th-2019'
  );

  sleep(5);

  console.log('filling the form ');

  await page.evaluate(async () => {
    document.querySelectorAll('.form-radio')[4].click();
    document.getElementById(
      'edit-tell-me-why-you-love-web-bots-so-much-'
    ).value = `The world is indeed full of perils and in it there are many dark places. - JRR Tolkien, The Lord of the rings\n Web bots give you super powers & make you the true master of web.`;
    document.getElementById('edit-actions-submit').click();
    document.querySelectorAll('.form-radio')[4].click();
  });

  sleep(20);

  console.log('Cleaning up');
}

main();

function sleep(amount) {
  console.log('sleeping for: ' + amount + ' seconds');
  return new Promise((resolve) => setTimeout(resolve, amount * 1000));
}
