import Swal from 'sweetalert2'

/* Shared SweetAlert2 wrapper so every "alert" on the site — marketing pages,
 * the senior/junior portals — looks like one product instead of a native
 * browser popup. Keeps the AIDL brand colours (ink/yellow) instead of
 * SweetAlert2's defaults. */

const BRAND = {
  confirmButtonColor: '#ffcc00',
  color: '#14140f',
  background: '#f5ecd2',
  confirmButtonText: 'OK',
  buttonsStyling: true,
}

export function notify(message, { title, icon = 'info' } = {}) {
  return Swal.fire({ title, text: message, icon, ...BRAND })
}

export function notifySuccess(message, title) {
  return notify(message, { icon: 'success', title })
}

export function notifyError(message, title) {
  return notify(message, { icon: 'error', title })
}

export function notifyWarning(message, title) {
  return notify(message, { icon: 'warning', title })
}

export function notifyInfo(message, title) {
  return notify(message, { icon: 'info', title })
}

// Non-dismissible spinner popup for actions that redirect/navigate away
// shortly after (e.g. kicking off an OAuth flow). Close it with notifyClose()
// on the error path — success paths get cleared automatically by the
// navigation away from the page.
export function notifyLoading(message, title) {
  return Swal.fire({
    title,
    text: message,
    ...BRAND,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    didOpen: () => Swal.showLoading(),
  })
}

export function notifyClose() {
  Swal.close()
}
