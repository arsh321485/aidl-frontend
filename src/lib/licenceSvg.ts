// The AI Driving License as inline SVG (design E:\licence_latest.png) — the same
// card the AIDL server draws as a PNG for Slack and Teams
// (aidl-backend/api/licence_image.py): change both together.

import aidlLogoUrl from '../assets/images/aidl-logo-licence.png'

export interface LicenceData {
  name: string
  org?: string
  number: string
  issued: string
  expires: string
  status?: string
  logo?: string
  avatar?: string | null
  // Panel colour (default navy; several colours = a gradient), text colour,
  // accent (title, road line) and licence-number colour.
  bg?: string | string[]
  ink?: string
  accent?: string
  numColor?: string
}

export const LICENCE_WIDTH = 800
export const LICENCE_HEIGHT = 468

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

// Shrinks text that would run past its space (rough width per character).
function fitted(content: string, size: number, perChar: number, room: number) {
  return Math.max(14, Math.min(size, Math.floor(room / (Math.max(content.length, 1) * perChar))))
}

export function licenceSvg(o: LicenceData): string {
  const dark = '#14140F', cream = '#F5ECD2', photoBg = '#D1D8E2', silhouette = '#7E8898'
  const pale = o.ink || '#E8EEF7', accent = o.accent || '#FFCC00', numColor = o.numColor || accent
  const gradId = 'lc-bg-' + o.number.replace(/[^\w-]/g, '')
  const panel = Array.isArray(o.bg) ? `url(#${gradId})` : o.bg || '#16233A'
  const gradient = Array.isArray(o.bg)
    ? `<linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="1">` +
      o.bg.map((c, i, a) => `<stop offset="${i / (a.length - 1)}" stop-color="${c}"/>`).join('') + '</linearGradient>'
    : ''
  const sans = 'font-family="Arial, Helvetica, sans-serif" font-weight="700"'
  const heavy = 'font-family="Arial Black, Arial, Helvetica, sans-serif" font-weight="900"'
  const mono = 'font-family="Courier New, Courier, monospace" font-weight="700"'
  const text = (x: number, y: number, size: number, font: string, fill: string, content: string, extra = '') =>
    `<text x="${x}" y="${y}" ${font} font-size="${size}" fill="${fill}"${extra ? ' ' + extra : ''}>${esc(content)}</text>`
  const label = (x: number, y: number, content: string) =>
    text(x, y, 12, sans, pale, content, 'letter-spacing=".6" fill-opacity=".62"')

  const name = o.name.toUpperCase()
  const status = (o.status || 'ACTIVE').toUpperCase()
  const pill = status === 'ACTIVE' ? '#1A7F37' : status === 'EXPIRED' ? '#C62F24' : '#FFB000'
  const pillInk = status === 'ACTIVE' || status === 'EXPIRED' ? '#FFFFFF' : dark
  const pillWidth = status.length * 11 + 44
  let who = o.org ? `ISSUED FOR ${o.org.toUpperCase()}` : 'ISSUED UNDER THE AIDL PUBLIC REGISTRY'
  if (who.length > 44) who = who.slice(0, 43).trimEnd() + '…'

  // Holder photo: the avatar, otherwise a passport-style silhouette.
  const photo = o.avatar
    ? `<image href="${esc(o.avatar)}" x="27.6" y="144" width="171.8" height="189" preserveAspectRatio="xMidYMid slice" clip-path="url(#lc-photo)"/>`
    : `<circle cx="113.5" cy="212" r="34" fill="${silhouette}"/><path d="M51.5 333 C 53 280, 80 256, 113.5 256 C 147 256, 174 280, 175.5 333 Z" fill="${silhouette}"/>`

  let hazard = ''
  for (let x = 8; x < 778; x += 19) {
    hazard += `<path d="M${x} 123 h10 l10 -13 h-10 Z" fill="${panel}"/>`
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${LICENCE_WIDTH} ${LICENCE_HEIGHT}" role="img" aria-label="AI Driving Licence for ${esc(o.name)}, ${esc(o.number)}, status ${esc(status)}">` +
    '<defs>' +
      gradient +
      '<clipPath id="lc-card"><rect width="787" height="456" rx="26"/></clipPath>' +
      '<clipPath id="lc-band"><rect x="8" y="110" width="770" height="13"/></clipPath>' +
      '<clipPath id="lc-photo"><rect x="38" y="144" width="151" height="189" rx="9"/></clipPath>' +
    '</defs>' +
    `<rect x="11" y="10" width="787" height="456" rx="26" fill="${dark}"/>` +
    '<g clip-path="url(#lc-card)">' +
      `<rect width="787" height="456" fill="${dark}"/>` +
      // header
      `<image href="${esc(o.logo || aidlLogoUrl)}" x="20" y="13" width="84" height="84"/>` +
      text(121, 56, 33, heavy, accent, 'AI DRIVING LICENCE') +
      text(122, 85, 13, sans, cream, who, 'letter-spacing="1.8"') +
      // hazard stripe + navy panel
      `<g clip-path="url(#lc-band)">${hazard}</g>` +
      `<rect x="8" y="123" width="770" height="280" fill="${panel}"/>` +
      // road: centre line
      `<line x1="8" y1="432" x2="778" y2="432" stroke="${accent}" stroke-width="3" stroke-dasharray="23 16"/>` +
      // photo
      `<rect x="38" y="144" width="151" height="189" rx="9" fill="${photoBg}"/>` +
      photo +
      `<rect x="38" y="144" width="151" height="189" rx="9" fill="none" stroke="${pale}" stroke-width="4"/>` +
      // holder details
      label(217, 164, '1. NAME') +
      text(217, 204, fitted(name, 36, 0.76, 530), heavy, pale, name) +
      label(217, 248, '2. ISSUED') +
      text(217, 276, fitted(o.issued, 22, 0.58, 145), sans, pale, o.issued) +
      label(372, 248, '3. VALID UNTIL') +
      text(372, 276, fitted(o.expires, 22, 0.58, 390), sans, pale, o.expires) +
      label(217, 321, '4. LICENCE NO.') +
      text(217, 352, 25, mono, numColor, o.number, 'letter-spacing="1"') +
      label(540, 321, '5. STATUS') +
      `<rect x="540" y="331" width="${pillWidth}" height="28" rx="14" fill="${pill}"/>` +
      `<circle cx="556" cy="345" r="4" fill="${pillInk}"/>` +
      text(568, 350, 14, sans, pillInk, status, 'letter-spacing=".6"') +
    '</g>' +
    '</svg>'
}
