export interface LicenseCertificateRow {
  label: string
  value: string
}

export interface LicenseCertificateDetails {
  holder: string
  licenseId: string
  classLabel?: string
  issued: string
  expires: string
  rows?: LicenseCertificateRow[]
  org?: string
  status?: string
  avatar?: string | null
}

export function downloadLicenseCertificate(details: LicenseCertificateDetails): Promise<void>
