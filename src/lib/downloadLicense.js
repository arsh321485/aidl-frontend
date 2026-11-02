/* Saves a licence as a PNG in the browser, in the same design as everywhere
 * else (licenceSvg). Used by the senior and junior portals and the showcase
 * cards, wherever a license/permit is shown. */
import { licencePng, saveBlob } from './licenceImage'

export async function downloadLicenseCertificate({ holder, licenseId, issued, expires, org, status, avatar }) {
  const blob = await licencePng({ name: holder, number: licenseId, issued, expires, org, status, avatar })
  saveBlob(blob, `${licenseId}.png`)
}
