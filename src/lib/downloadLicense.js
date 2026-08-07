/* Builds a self-contained, printable HTML "certificate" for a license and
 * triggers a browser download. Used by both the senior and junior portals
 * wherever a license/permit is shown, so a driver can save/print their own
 * copy without any server-side PDF generation. */

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

export function downloadLicenseCertificate({ holder, licenseId, classLabel, issued, expires, rows = [] }) {
  const rowsHtml = rows
    .filter((r) => r && r.value)
    .map((r) => `<div class="row"><span class="k">${escapeHtml(r.label)}</span><span class="v">${escapeHtml(r.value)}</span></div>`)
    .join('')

  const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>${escapeHtml(licenseId)} — AIDL License</title>
<style>
  * { box-sizing: border-box; }
  body { margin: 0; padding: 40px; background: #14140f; font-family: Georgia, "Times New Roman", serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
  .card { width: 100%; max-width: 520px; background: linear-gradient(135deg, #ffe27a 0%, #ffcc00 60%, #f5b800 100%); border: 4px solid #14140f; box-shadow: 10px 10px 0 #14140f; padding: 32px; color: #14140f; }
  .head { display: flex; justify-content: space-between; border-bottom: 2px solid #14140f; padding-bottom: 12px; margin-bottom: 18px; font-family: "Courier New", monospace; font-size: 12px; text-transform: uppercase; letter-spacing: .06em; }
  h1 { font-size: 24px; margin: 0 0 18px; letter-spacing: .02em; }
  .row { display: flex; justify-content: space-between; gap: 16px; padding: 7px 0; border-bottom: 1px dashed rgba(20,20,15,.35); font-size: 14px; }
  .row .k { font-family: "Courier New", monospace; font-size: 11px; text-transform: uppercase; opacity: .7; white-space: nowrap; }
  .row .v { text-align: right; }
  .num { margin-top: 18px; font-family: "Courier New", monospace; font-size: 17px; letter-spacing: .08em; border-top: 2px solid #14140f; padding-top: 14px; }
  .foot { margin-top: 20px; font-family: "Courier New", monospace; font-size: 10px; opacity: .65; }
  @media print { body { background: #fff; padding: 0; } .card { box-shadow: none; } }
</style></head>
<body>
  <div class="card">
    <div class="head"><span>AI Driving License</span><span>${escapeHtml(issued)}</span></div>
    <h1>${escapeHtml(String(holder).toUpperCase())}</h1>
    <div class="row"><span class="k">Class</span><span class="v">${escapeHtml(classLabel)}</span></div>
    <div class="row"><span class="k">Expires</span><span class="v">${escapeHtml(expires)}</span></div>
    ${rowsHtml}
    <div class="num">${escapeHtml(licenseId)}</div>
    <div class="foot">Issued under AIDL public registry &middot; downloaded ${new Date().toLocaleString()}</div>
  </div>
</body></html>`

  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${licenseId}.html`
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}
