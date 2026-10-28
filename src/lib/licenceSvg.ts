// The AI Driving License card as inline SVG — the same design the AIDL server
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
}

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function licenceSvg(o: LicenceData): string {
  const W = 800, H = 470
  const ink = '#14140F', yellow = '#FFCC00', green = '#1a7f37', red = '#C62F24'
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

  // Machine-readable line along the bottom, as on ID documents.
  const mrz = ('AIDL<' + o.number.replace(/^AIDL-/, '').replace(/-/g, '<') + '<<' +
    o.name.toUpperCase().split(' ').reverse().join('<<') + '<'.repeat(40)).slice(0, 44)

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="AI Driving License for ${esc(o.name)}, ${esc(o.number)}">` +
    '<defs>' +
      `<clipPath id="lpl-card"><rect x="3" y="3" width="${W - 6}" height="${H - 6}" rx="24"/></clipPath>` +
      '<clipPath id="lpl-ph"><rect x="40" y="148" width="150" height="188" rx="10"/></clipPath>' +
      '<clipPath id="lpl-lg"><circle cx="64" cy="56" r="36"/></clipPath>' +
      `<pattern id="lpl-hz" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="11" height="22" fill="${ink}"/></pattern>` +
      `<pattern id="lpl-gl" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(30)"><circle cx="9" cy="9" r="7" fill="none" stroke="${ink}" stroke-opacity=".06" stroke-width="1"/></pattern>` +
    '</defs>' +
    '<g clip-path="url(#lpl-card)">' +
      `<rect width="${W}" height="${H}" fill="${yellow}"/>` +
      `<rect width="${W}" height="${H}" fill="url(#lpl-gl)"/>` +
      // header band
      `<rect width="${W}" height="112" fill="${ink}"/>` +
      `<rect y="112" width="${W}" height="12" fill="url(#lpl-hz)"/>` +
      `<circle cx="64" cy="56" r="40" fill="${yellow}"/>` +
      (o.logo ? `<image href="${esc(o.logo)}" x="28" y="20" width="72" height="72" clip-path="url(#lpl-lg)"/>`
        : text(64, 64, 22, heavy, ink, 'AI', 'text-anchor="middle"')) +
      text(122, 54, 32, heavy, yellow, 'AI DRIVING LICENSE', 'letter-spacing="1"') +
      text(124, 84, 15, sans + ' font-weight="700"', '#F5ECD2', 'ISSUED FOR ' + esc(o.org), 'letter-spacing="2"') +
      // photo + signature
      photo +
      `<rect x="40" y="148" width="150" height="188" rx="10" fill="none" stroke="${ink}" stroke-width="4"/>` +
      text(44, 372, 22, 'font-family="Segoe Script, Brush Script MT, cursive" font-style="italic"', ink, esc(o.name), 'textLength="142" lengthAdjust="spacingAndGlyphs"') +
      `<rect x="40" y="380" width="150" height="1.5" fill="${ink}" fill-opacity=".5"/>` +
      text(40, 396, 11, sans + ' font-weight="700"', ink, 'HOLDER’S SIGNATURE', 'fill-opacity=".6" letter-spacing="1"') +
      // holder details
      label(220, 168, '1. NAME') +
      text(220, 208, 38, heavy, ink, esc(o.name.toUpperCase())) +
      label(220, 252, '2. ISSUED') +
      text(220, 280, 22, sans + ' font-weight="700"', ink, esc(o.issued)) +
      label(380, 252, '3. VALID UNTIL') +
      text(380, 280, 22, sans + ' font-weight="700"', ink, esc(o.expires)) +
      label(560, 252, '4. STATUS') +
      `<rect x="560" y="260" width="110" height="30" rx="15" fill="${green}"/>` +
      '<circle cx="578" cy="275" r="5" fill="#fff"/>' +
      text(590, 281, 16, sans + ' font-weight="700"', '#fff', 'ACTIVE', 'letter-spacing="1"') +
      label(220, 326, '5. LICENSE NO.') +
      text(220, 356, 26, mono, red, esc(o.number), 'letter-spacing="1"') +
      // road footer: centre line + machine-readable line
      `<rect y="410" width="${W}" height="${H - 410}" fill="${ink}"/>` +
      `<line x1="0" y1="420" x2="${W}" y2="420" stroke="${yellow}" stroke-width="3" stroke-dasharray="26 16"/>` +
      text(40, 452, 17, mono, '#F5ECD2', esc(mrz), 'letter-spacing="2.4"') +
    '</g>' +
    `<rect x="3" y="3" width="${W - 6}" height="${H - 6}" rx="24" fill="none" stroke="${ink}" stroke-width="6"/>` +
    '</svg>'
}
