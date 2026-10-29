// The AI Driving Licence card as inline SVG — the same design the AIDL server
// renders as a PNG for Slack / Teams (aidl-design/teams-cards.html,
// licenseImage). Inline (not an <img>) so the logo and avatar URLs load.

export interface LicenceData {
  name: string
  org: string
  number: string
  issued: string
  expires: string
  logo?: string
  avatar?: string
  // Card colour (default AIDL yellow; several colours = a gradient), text
  // colour, accent (title, seal, road line) and licence-number colour.
  bg?: string | string[]
  ink?: string
  accent?: string
  numColor?: string
}

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function licenceSvg(o: LicenceData): string {
  const W = 800, H = 470
  const dark = '#14140F', ink = o.ink || dark, red = o.numColor || '#C62F24'
  const gradId = 'lpl-bg-' + o.number.replace(/[^\w-]/g, '')
  const bgFill = Array.isArray(o.bg) ? `url(#${gradId})` : o.bg || '#FFCC00'
  const yellow = o.accent || (Array.isArray(o.bg) ? o.bg[0]! : bgFill)
  const gradient = Array.isArray(o.bg)
    ? `<linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="1">` +
      o.bg.map((c, i, a) => `<stop offset="${i / (a.length - 1)}" stop-color="${c}"/>`).join('') + '</linearGradient>'
    : ''
  const sans = 'font-family="Arial, Helvetica, sans-serif"'
  const heavy = 'font-family="Arial Black, Arial, sans-serif" font-weight="900"'
  const mono = 'font-family="Courier New, monospace" font-weight="700"'
  const text = (px: number, py: number, size: number, font: string, fill: string, content: string, extra = '') =>
    `<text x="${px}" y="${py}" ${font} font-size="${size}" fill="${fill}"${extra ? ' ' + extra : ''}>${content}</text>`
  const label = (px: number, py: number, content: string) =>
    text(px, py, 13, sans + ' font-weight="700"', ink, content, 'fill-opacity=".62" letter-spacing="1.2"')

  // Holder photo: the avatar, otherwise a passport-style silhouette.
  const photo = o.avatar
    ? `<image href="${esc(o.avatar)}" x="40" y="148" width="150" height="188" preserveAspectRatio="xMidYMid slice" clip-path="url(#lpl-ph)"/>`
    : '<rect x="40" y="148" width="150" height="188" fill="#E9E2C6"/><circle cx="115" cy="222" r="38" fill="#8a8468"/>' +
      '<path d="M50 336 C 54 280, 84 268, 115 268 C 146 268, 176 280, 180 336 Z" fill="#8a8468"/>'

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="AI Driving Licence for ${esc(o.name)}, ${esc(o.number)}">` +
    '<defs>' +
      `<clipPath id="lpl-card"><rect x="3" y="3" width="${W - 6}" height="${H - 6}" rx="24"/></clipPath>` +
      '<clipPath id="lpl-ph"><rect x="40" y="148" width="150" height="188" rx="10"/></clipPath>' +
      '<clipPath id="lpl-lg"><circle cx="64" cy="56" r="36"/></clipPath>' +
      `<pattern id="lpl-hz" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="11" height="22" fill="${dark}"/></pattern>` +
      gradient +
      `<pattern id="lpl-gl" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(30)"><circle cx="9" cy="9" r="7" fill="none" stroke="${ink}" stroke-opacity=".06" stroke-width="1"/></pattern>` +
    '</defs>' +
    '<g clip-path="url(#lpl-card)">' +
      `<rect width="${W}" height="${H}" fill="${bgFill}"/>` +
      `<rect width="${W}" height="${H}" fill="url(#lpl-gl)"/>` +
      // header band
      `<rect width="${W}" height="112" fill="${dark}"/>` +
      `<rect y="112" width="${W}" height="12" fill="url(#lpl-hz)"/>` +
      `<circle cx="64" cy="56" r="40" fill="${yellow}"/>` +
      (o.logo ? `<image href="${esc(o.logo)}" x="28" y="20" width="72" height="72" clip-path="url(#lpl-lg)"/>`
        : text(64, 64, 22, heavy, dark, 'AI', 'text-anchor="middle"')) +
      text(122, 54, 32, heavy, yellow, 'AI DRIVING LICENCE', 'letter-spacing="1"') +
      text(124, 84, 15, sans + ' font-weight="700"', '#F5ECD2', 'ISSUED FOR ' + esc(o.org), 'letter-spacing="2"') +
      // photo
      photo +
      `<rect x="40" y="148" width="150" height="188" rx="10" fill="none" stroke="${ink}" stroke-width="4"/>` +
      // holder details
      label(220, 168, '1. NAME') +
      text(220, 208, 38, heavy, ink, esc(o.name.toUpperCase())) +
      label(220, 252, '2. ISSUED') +
      text(220, 280, 22, sans + ' font-weight="700"', ink, esc(o.issued)) +
      label(380, 252, '3. VALID UNTIL') +
      text(380, 280, 22, sans + ' font-weight="700"', ink, esc(o.expires)) +
      label(220, 326, '4. LICENCE NO.') +
      text(220, 356, 26, mono, red, esc(o.number), 'letter-spacing="1"') +
      // road footer: centre line
      `<rect y="410" width="${W}" height="${H - 410}" fill="${dark}"/>` +
      `<line x1="0" y1="440" x2="${W}" y2="440" stroke="${yellow}" stroke-width="3" stroke-dasharray="26 16"/>` +
    '</g>' +
    `<rect x="3" y="3" width="${W - 6}" height="${H - 6}" rx="24" fill="none" stroke="${dark}" stroke-width="6"/>` +
    '</svg>'
}
