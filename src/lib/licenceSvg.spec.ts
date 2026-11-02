import { describe, expect, it } from 'vitest'
import { licenceSvg, LICENCE_HEIGHT, LICENCE_WIDTH } from './licenceSvg'

const base = { name: 'Your Name', org: 'Your Org', number: 'AIDL-L-4417-0932', issued: '22/10/2026', expires: '22/10/2027' }

describe('licenceSvg', () => {
  it('shows the holder, licence number, dates and status', () => {
    const svg = licenceSvg(base)
    for (const text of ['YOUR NAME', 'ISSUED FOR YOUR ORG', 'AIDL-L-4417-0932', '22/10/2026', '22/10/2027', 'ACTIVE']) {
      expect(svg).toContain(text)
    }
    expect(svg).toContain(`viewBox="0 0 ${LICENCE_WIDTH} ${LICENCE_HEIGHT}"`)
  })

  it('shows any status it is given', () => {
    expect(licenceSvg({ ...base, status: 'expired' })).toContain('EXPIRED')
    expect(licenceSvg({ ...base, status: 'SUSPENDED' })).toContain('SUSPENDED')
  })

  it('uses the avatar when there is one, else a silhouette', () => {
    expect(licenceSvg({ ...base, avatar: 'data:image/png;base64,AAA' })).toContain('data:image/png;base64,AAA')
    expect(licenceSvg(base)).not.toContain('clip-path="url(#lc-photo)"')
  })

  it('escapes what people typed', () => {
    const svg = licenceSvg({ ...base, name: 'A<b>&"C', org: '<script>' })
    expect(svg).not.toContain('<b>')
    expect(svg).not.toContain('<script>')
  })

  it('says who issued it when there is no organisation', () => {
    expect(licenceSvg({ ...base, org: '' })).toContain('ISSUED UNDER THE AIDL PUBLIC REGISTRY')
  })

  it('shrinks a very long name and shortens a very long organisation', () => {
    const long = 'Maximiliana Featherstonehaugh-Cholmondeley De La Cruz'
    expect(licenceSvg({ ...base, name: long })).not.toMatch(/font-size="36"[^>]*>MAXIMILIANA/)
    expect(licenceSvg({ ...base, org: 'O'.repeat(80) })).toContain('…')
  })
})
