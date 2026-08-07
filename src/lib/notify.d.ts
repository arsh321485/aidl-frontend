export type NotifyIcon = 'success' | 'error' | 'warning' | 'info' | 'question'

export function notify(message: string, options?: { title?: string; icon?: NotifyIcon }): Promise<unknown>
export function notifySuccess(message: string, title?: string): Promise<unknown>
export function notifyError(message: string, title?: string): Promise<unknown>
export function notifyWarning(message: string, title?: string): Promise<unknown>
export function notifyInfo(message: string, title?: string): Promise<unknown>
