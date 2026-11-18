import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, type App } from 'vue'

// (@vue/test-utils can't load under this project's Vue 3.6 beta, so the page is mounted with Vue itself.)

vi.mock('vue-router', () => ({
  useRoute: () => ({ query: {} }),
  useRouter: () => ({ replace: vi.fn() }),
}))

const api = vi.hoisted(() => ({
  getPlans: vi.fn(),
  applyPromoCode: vi.fn(),
  previewCards: vi.fn(),
  checkout: vi.fn(),
  hasToken: vi.fn(() => true),
  saveToken: vi.fn(),
}))

vi.mock('../lib/billingApi', async () => {
  class BillingError extends Error {
    constructor(message: string, public status = 0, public fieldErrors: Record<string, string[]> = {}) {
      super(message)
    }
  }
  return { ...api, BillingError }
})

import PlansView from './PlansView.vue'
import { BillingError } from '../lib/billingApi'

const plan = (key: string, label: string, current = false, available = true) => ({
  key, label, price: 'Price on request', cards: 3, cadence: '2 cards a week (Mon, Thu)', users: 5, picks_topics: false,
  all_topics: key === 'enterprise', custom_schedule: key === 'enterprise', current, available,
})

function plansData(extra: Record<string, unknown> = {}, current = 'trial') {
  return {
    organization: 'Secureitlab', current,
    usage: { used: 1, limit: 5, label: 'Trial', cards: 3, cadence: '2 cards a week (Mon, Thu)',
      trial: { days: 7, started: true, days_left: 5, expired: false, ends_at: '2026-11-25T10:00:00Z' } },
    plans: [plan('trial', 'Trial', current === 'trial'), plan('basic', 'Basic'), plan('enterprise', 'Enterprise', current === 'enterprise')],
    categories: [], topics: {}, schedule: { days: [0, 1, 3, 4], hour: 10 }, pending: null, test_mode: false, provider: '',
    payment_ready: {}, sales_email: '', preview_cards: 12, weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    can_upgrade: true, ...extra,
  }
}

const settle = () => new Promise((resolve) => setTimeout(resolve, 0))

let app: App | null = null
let el: HTMLElement

async function open() {
  el = document.createElement('div')
  document.body.appendChild(el)
  app = createApp(PlansView)
  app.mount(el)
  await settle()
  await settle()
}

async function typeCode(value: string) {
  const input = el.querySelector('input[aria-label="Promo code"]') as HTMLInputElement
  input.value = value
  input.dispatchEvent(new Event('input'))
  await settle()
}

async function submitCode() {
  el.querySelector('form.pl-promo-row')!.dispatchEvent(new Event('submit', { cancelable: true }))
  await settle()
  await settle()
  await settle()
}

describe('PlansView promo code box', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    window.scrollTo = vi.fn() as unknown as typeof window.scrollTo
    api.hasToken.mockReturnValue(true)
    api.previewCards.mockResolvedValue({ cards: [], total: 0 })
  })

  afterEach(() => {
    app?.unmount()
    el?.remove()
    app = null
  })

  it('is not shown to an ordinary customer', async () => {
    api.getPlans.mockResolvedValue(plansData())
    await open()
    expect(el.textContent).not.toContain('Have a promo code?')
    expect(el.querySelector('input[aria-label="Promo code"]')).toBeNull()
    expect(api.applyPromoCode).not.toHaveBeenCalled()
  })

  it('sits below the pricing cards for an internal tester', async () => {
    api.getPlans.mockResolvedValue(plansData({ promo_available: true }))
    await open()
    expect(el.textContent).toContain('Have a promo code?')
    const plans = el.querySelector('.pl-plans')!
    const promo = el.querySelector('.pl-promo')!
    expect(plans.compareDocumentPosition(promo) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('applies a code, says so, refreshes the plan and takes the box away', async () => {
    api.getPlans
      .mockResolvedValueOnce(plansData({ promo_available: true }))
      .mockResolvedValueOnce(plansData({}, 'enterprise'))
    api.applyPromoCode.mockResolvedValue({ status: 'activated', message: 'Enterprise is on for internal testing.' })
    await open()
    const apply = el.querySelector('button.pl-apply') as HTMLButtonElement
    expect(apply.disabled).toBe(true) // nothing typed yet
    await typeCode('  TESTING_QA ')
    expect(apply.disabled).toBe(false)
    await submitCode()
    expect(api.applyPromoCode).toHaveBeenCalledTimes(1)
    expect(api.applyPromoCode).toHaveBeenCalledWith('TESTING_QA')
    expect(api.getPlans).toHaveBeenCalledTimes(2)
    expect(el.textContent).toContain('Enterprise is on for internal testing.')
    expect(el.textContent).toContain('current plan: Enterprise')
    expect(el.textContent).not.toContain('Have a promo code?')
  })

  it('shows the refusal and keeps the plan as it was', async () => {
    api.getPlans.mockResolvedValue(plansData({ promo_available: true }))
    api.applyPromoCode.mockRejectedValue(new BillingError("This code isn't valid for this workspace.", 400))
    await open()
    await typeCode('WRONG')
    await submitCode()
    expect(el.querySelector('[role="alert"]')!.textContent).toBe("This code isn't valid for this workspace.")
    expect(api.getPlans).toHaveBeenCalledTimes(1)
    expect(el.textContent).toContain('Have a promo code?')
    expect(el.textContent).toContain('current plan: Trial')
  })
})
