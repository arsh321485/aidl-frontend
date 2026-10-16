// Licence avatar API (backend api/avatar.py). Employees arrive from Slack
// ("Create my avatar") with ?token=<avatar-only token, 24h>; the page keeps it
// in sessionStorage for this tab only.
import { buildAvatarLayers, type AvatarConfig, type ShapeNode } from './avatar-parts'

const API_BASE = (import.meta.env.VITE_API_BASE || 'http://localhost:8000').replace(/\/$/, '')
const TOKEN_KEY = 'aidl_avatar_token'

export interface AvatarInfo {
  name: string
  has_avatar: boolean
  config: AvatarConfig | null
  licensed: boolean
}

export class AvatarError extends Error {}

export function saveToken(token: string) {
  try { sessionStorage.setItem(TOKEN_KEY, token) } catch (e) {}
}

function token(): string {
  try { return sessionStorage.getItem(TOKEN_KEY) || '' } catch (e) { return '' }
}

export const hasToken = () => !!token()

async function call<T>(init?: RequestInit, query = ''): Promise<T> {
  let res: Response
  try {
    res = await fetch(`${API_BASE}/api/avatar/${query}`, init)
  } catch (e) {
    throw new AvatarError('Could not reach the server. Check your connection and try again.')
  }
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    const d = data as Record<string, unknown>
    throw new AvatarError(String(d.detail || (Array.isArray(d.png) ? d.png[0] : '') || 'Something went wrong. Please try again.'))
  }
  return data as T
}

export const getAvatar = () => call<AvatarInfo>(undefined, `?token=${encodeURIComponent(token())}`)

export const saveAvatar = (png: string, config: AvatarConfig) =>
  call<{ ok: boolean; licensed: boolean; message: string }>({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: token(), png, config }),
  })

// ---------- avatar → PNG (the licence is drawn on the server) ----------

function esc(v: string | number) {
  return String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

function nodeToSvg(node: ShapeNode): string {
  const attrs = Object.entries(node.attrs || {}).map(([k, v]) => ` ${k}="${esc(v)}"`).join('')
  const children = (node.children || []).map(nodeToSvg).join('')
  return `<${node.tag}${attrs}>${children}</${node.tag}>`
}

export function avatarSvg(cfg: AvatarConfig): string {
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 220" width="400" height="440">'
    + buildAvatarLayers(cfg).map(nodeToSvg).join('') + '</svg>'
}

export function avatarPng(cfg: AvatarConfig): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 400
      canvas.height = 440
      const ctx = canvas.getContext('2d')
      if (!ctx) return reject(new AvatarError('Your browser could not draw the avatar.'))
      ctx.drawImage(img, 0, 0, 400, 440)
      resolve(canvas.toDataURL('image/png'))
    }
    img.onerror = () => reject(new AvatarError('Your browser could not draw the avatar.'))
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(avatarSvg(cfg))
  })
}
