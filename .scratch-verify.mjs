import { chromium } from '@playwright/test'

const OUT = 'C:\\Users\\admin\\AppData\\Local\\Temp\\claude\\E--all-Office-projects-AIDL\\845d34b2-141c-4957-b38a-d3c36f2cd9d6\\scratchpad\\shots'
const BASE = 'http://localhost:5173'
const MOBILE = { width: 390, height: 844 }
const TABLET = { width: 834, height: 1112 }

async function shot(page, name) {
  await page.screenshot({ path: `${OUT}\\${name}.png`, fullPage: true })
  console.log('shot', name)
}

async function main() {
  const browser = await chromium.launch()
  const ctx = await browser.newContext()
  const page = await ctx.newPage()

  // Auth
  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' })
  await page.evaluate(() => localStorage.setItem('aidl_auth', 'true'))

  // ---------- ROAD TEST: drive to results screen ----------
  await page.setViewportSize(MOBILE)
  await page.goto(BASE + '/road-test', { waitUntil: 'networkidle' })
  await page.click('button.rt-btn.primary') // start test

  // Scenario 1: pick two correct signs then submit
  await page.click('.sign-pick:has-text("RED LIGHT DATA")')
  await page.click('.sign-pick:has-text("SHADOW AI")')
  await page.click('.scn-actions >> text=Submit Answer')
  await page.click('.scn-actions >> text=Continue')

  // Scenario 2: classify rows
  const rows = await page.locator('.classify-row').all()
  const correctByRow = ['green', 'amber', 'red']
  for (let i = 0; i < rows.length; i++) {
    await rows[i].locator(`.classify-opt[data-c="${correctByRow[i]}"]`).click()
  }
  await page.click('.scn-actions >> text=Submit Answer')
  await page.click('.scn-actions >> text=Continue')

  // Scenario 3: PREP fields
  await page.fill('input[placeholder*="Act as"]', 'Act as a Senior Marketing Manager.')
  await page.fill('input[placeholder*="specific"]', 'Write a launch announcement for our new product.')
  await page.fill('input[placeholder*="Format"]', 'Under 150 words, three short paragraphs.')
  await page.fill('input[placeholder*="NOT include"]', 'Do not mention pricing or competitors.')
  await page.click('.scn-actions >> text=Submit Answer')
  await page.click('.scn-actions >> text=Continue')

  // Scenario 4: sanitise - just submit as-is
  await page.click('.scn-actions >> text=Submit Answer')
  await page.click('.scn-actions >> text=Continue')

  // Scenario 5: escalation routing
  const selects = await page.locator('.route-select').all()
  const routes = ['IT', 'GOV', 'LEG', 'HR']
  for (let i = 0; i < selects.length; i++) {
    await selects[i].selectOption(routes[i])
  }
  await page.click('.scn-actions >> text=Submit Answer')
  await page.click('.scn-actions >> text=See Results')

  await page.waitForTimeout(400)
  await shot(page, 'roadtest_results_mobile')

  await page.setViewportSize(TABLET)
  await page.waitForTimeout(200)
  await shot(page, 'roadtest_results_tablet')

  // ---------- LESSON PLAYERS: drive iframe content to specific panels ----------
  await page.setViewportSize(MOBILE)
  await page.goto(BASE + '/senior-player', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)
  const seniorFrame = page.frameLocator('iframe.lesson-player-frame')

  // Switch to Operator level (has red-team console + risk register per level design)
  await seniorFrame.locator('button[data-level="C"]').click().catch(() => {})
  await page.waitForTimeout(800)

  // Try clicking a chapter flagged as redteam
  const redteamChap = seniorFrame.locator('.chap.redteam').first()
  if (await redteamChap.count()) {
    await redteamChap.click()
    await page.waitForTimeout(600)
    await shot(page, 'senior_redteam_mobile')
  } else {
    console.log('no redteam chapter found for level C')
  }

  const riskChap = seniorFrame.locator('.chap.riskregister').first()
  if (await riskChap.count()) {
    await riskChap.click()
    await page.waitForTimeout(600)
    await shot(page, 'senior_riskregister_mobile')
  } else {
    console.log('no riskregister chapter found')
  }

  // ---------- Junior sort game ----------
  await page.goto(BASE + '/junior-player', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)
  const juniorFrame = page.frameLocator('iframe.lesson-player-frame')
  const sortChap = juniorFrame.locator('[class*="sort"]').first()
  // Try common class hooks for the sort game chapter marker
  const chapCandidates = ['.chap.sort', '.chap.sortgame', '.chap.classify']
  let clicked = false
  for (const sel of chapCandidates) {
    const loc = juniorFrame.locator(sel).first()
    if (await loc.count()) {
      await loc.click()
      clicked = true
      break
    }
  }
  if (!clicked) {
    console.log('no direct sort-game chapter selector matched; listing chapter classes')
    const chapEls = await juniorFrame.locator('.chap').all()
    for (const el of chapEls) {
      console.log('chap class=', await el.getAttribute('class'), 'text=', (await el.innerText()).slice(0, 40))
    }
  } else {
    await page.waitForTimeout(600)
    await shot(page, 'junior_sortgame_mobile')
  }

  await browser.close()
}

main().catch((e) => { console.error(e); process.exit(1) })
