// The website's licence as a PNG, for downloading and sharing. licenceSvg is
// plain SVG, so a browser can turn it into a picture without a server — as long
// as the logo and avatar inside it are data: URLs (images linked from an SVG
// loaded this way don't load).

import aidlLogoUrl from '../assets/images/aidl-logo-transparent.png'
import { avatarSvg } from './avatarApi'
import type { AvatarConfig } from './avatar-parts'
import { licenceSvg, LICENCE_HEIGHT, LICENCE_WIDTH, type LicenceData } from './licenceSvg'

let logoData: Promise<string> | null = null

function logoDataUrl(): Promise<string> {
  logoData ??= fetch(aidlLogoUrl)
    .then((res) => res.blob())
    .then((blob) => new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(String(reader.result))
      reader.onerror = () => reject(reader.error)
      reader.readAsDataURL(blob)
    }))
  return logoData
}

export function avatarDataUrl(config: AvatarConfig | null | undefined): string {
  return config ? 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(avatarSvg(config)) : ''
}

// The avatar chosen on the enroll form (the portals show it on the licence).
export function storedAvatarUrl(): string {
  try {
    return avatarDataUrl(JSON.parse(localStorage.getItem('aidl-avatar') || 'null'))
  } catch (e) {
    return ''
  }
}

export async function licencePng(data: LicenceData, scale = 2): Promise<Blob> {
  const svg = licenceSvg({ ...data, logo: await logoDataUrl() })
    .replace('<svg ', `<svg width="${LICENCE_WIDTH * scale}" height="${LICENCE_HEIGHT * scale}" `)
  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = () => reject(new Error('The licence could not be drawn.'))
    image.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg)
  })
  const canvas = document.createElement('canvas')
  canvas.width = LICENCE_WIDTH * scale
  canvas.height = LICENCE_HEIGHT * scale
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('The licence could not be drawn.')
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  return new Promise((resolve, reject) => canvas.toBlob(
    (blob) => (blob ? resolve(blob) : reject(new Error('The licence could not be drawn.'))), 'image/png'))
}

export function saveBlob(blob: Blob, filename: string) {
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(a.href), 4000)
}
