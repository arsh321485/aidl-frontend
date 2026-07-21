import { chromium } from 'playwright-core';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1100, height: 700 } });

await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.evaluate(() => localStorage.setItem('aidl_auth', 'true'));

await page.goto('http://localhost:5173/senior-portal', { waitUntil: 'networkidle' });
await page.waitForTimeout(500);

const info = await page.evaluate(() => {
  const main = document.querySelector('main.main');
  const layout = document.querySelector('.senior-portal-layout');
  return {
    mainScrollWidth: main.scrollWidth,
    mainClientWidth: main.clientWidth,
    mainHasHScroll: main.scrollWidth > main.clientWidth,
    layoutScrollWidth: layout.scrollWidth,
    layoutClientWidth: layout.clientWidth,
    docHasHScroll: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  };
});
console.log(JSON.stringify(info, null, 2));

await page.screenshot({ path: 'C:\\Users\\admin\\AppData\\Local\\Temp\\claude\\E--all-Office-projects-AIDL\\b46bb545-8d78-4664-8709-55325855eae7\\scratchpad\\senior-laptop-1100.png' });

await browser.close();
