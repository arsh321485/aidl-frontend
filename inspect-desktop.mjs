import { chromium } from 'playwright-core';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 800 } });

await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.evaluate(() => localStorage.setItem('aidl_auth', 'true'));

const urls = ['http://localhost:5173/senior-portal', 'http://localhost:5173/junior-portal'];

for (const url of urls) {
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const info = await page.evaluate(() => {
    const sidebar = document.querySelector('aside.sidebar');
    const main = document.querySelector('main.main');
    const layout = document.querySelector('.senior-portal-layout, .junior-portal-layout');
    const sideCard = document.querySelector('.side-card');
    const rect = el => el ? { h: Math.round(el.getBoundingClientRect().height), scrollH: el.scrollHeight, cs_overflow: getComputedStyle(el).overflowY, cs_height: getComputedStyle(el).height, cs_position: getComputedStyle(el).position } : null;
    return {
      sidebar: rect(sidebar),
      main: rect(main),
      layout: rect(layout),
      sideCard: rect(sideCard),
      windowInnerHeight: window.innerHeight,
      docScrollHeight: document.documentElement.scrollHeight,
    };
  });
  console.log('=== ' + url + ' ===');
  console.log(JSON.stringify(info, null, 2));

  const name = url.includes('senior') ? 'senior' : 'junior';
  await page.screenshot({ path: `C:\\Users\\admin\\AppData\\Local\\Temp\\claude\\E--all-Office-projects-AIDL\\b46bb545-8d78-4664-8709-55325855eae7\\scratchpad\\${name}-desktop-top.png` });

  // scroll the main pane to its bottom to see sidebar behavior relative to main content
  await page.evaluate(() => {
    const main = document.querySelector('main.main');
    main.scrollTop = main.scrollHeight;
  });
  await page.waitForTimeout(200);
  await page.screenshot({ path: `C:\\Users\\admin\\AppData\\Local\\Temp\\claude\\E--all-Office-projects-AIDL\\b46bb545-8d78-4664-8709-55325855eae7\\scratchpad\\${name}-desktop-scrolled.png` });
}

await browser.close();
