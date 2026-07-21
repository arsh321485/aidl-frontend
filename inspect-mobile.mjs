import { chromium } from 'playwright-core';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 360, height: 740 } });

await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.evaluate(() => localStorage.setItem('aidl_auth', 'true'));

const urls = ['http://localhost:5173/senior-portal', 'http://localhost:5173/junior-portal'];

for (const url of urls) {
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const info = await page.evaluate(() => {
    const winWidth = window.innerWidth;
    const docWidth = document.documentElement.scrollWidth;
    const all = document.querySelectorAll('*');
    const overflowing = [];
    all.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width > winWidth + 2 || rect.right > winWidth + 2) {
        overflowing.push({
          tag: el.tagName,
          cls: el.className && typeof el.className === 'string' ? el.className.slice(0, 100) : '',
          width: Math.round(rect.width),
          right: Math.round(rect.right),
          left: Math.round(rect.left)
        });
      }
    });
    return { docWidth, winWidth, overflowing: overflowing.slice(0, 50) };
  });

  console.log('=== ' + url + ' ===');
  console.log(JSON.stringify(info, null, 2));

  const name = url.includes('senior') ? 'senior' : 'junior';
  await page.screenshot({ path: `C:\\Users\\admin\\AppData\\Local\\Temp\\claude\\E--all-Office-projects-AIDL\\b46bb545-8d78-4664-8709-55325855eae7\\scratchpad\\${name}-mobile.png`, fullPage: true });

  // scroll to the "rule of the road" card for a viewport-sized crop matching the reference screenshots
  const target = await page.$('text=RULE OF THE ROAD');
  if (target) {
    await target.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await page.screenshot({ path: `C:\\Users\\admin\\AppData\\Local\\Temp\\claude\\E--all-Office-projects-AIDL\\b46bb545-8d78-4664-8709-55325855eae7\\scratchpad\\${name}-rule-viewport.png` });
  }
}

await browser.close();
