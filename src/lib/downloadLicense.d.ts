export interface LicenseCertificateRow {
  label: string
  value: string
}

export interface LicenseCertificateDetails {
  holder: string
  licenseId: string
  classLabel: string
  issued: string
  expires: string
  rows?: LicenseCertificateRow[]
}

export function downloadLicenseCertificate(details: LicenseCertificateDetails): void
