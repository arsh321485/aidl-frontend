// Nav / footer section links of the landing page (HomeView). Also shown on
// the Privacy and Support pages (SitePageShell), where they point to /home#id.
export const NAV_LINKS = [
  { id: 'how', label: 'How it works' },
  { id: 'admins', label: 'For admins' },
  { id: 'drivers', label: 'For your team' },
  { id: 'cards', label: 'The cards' },
  { id: 'control', label: 'Oversight' },
  { id: 'compliance', label: 'Compliance' },
]

// Footer social profiles (HomeView and SitePageShell). `icon` is the inner
// markup of a 24×24 SVG drawn in currentColor.
// TODO: replace the X URL with AIDL's real profile page.
export const SOCIAL_LINKS = [
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/aidrivinglicence/',
    icon: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.3" cy="6.7" r="1.3" fill="currentColor"/>',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61596242991119',
    icon: '<path fill="currentColor" d="M13.5 22v-8.2h2.8l.4-3.3h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.3h2.8V22z"/>',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/ai-driving-licence',
    icon: '<path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13M7.12 20.45H3.56V9h3.56z"/>',
  },
  {
    id: 'twitter',
    label: 'X (Twitter)',
    url: 'https://x.com/',
    icon: '<path fill="currentColor" d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78zm-1.08 16.18h1.7L7.4 4.73H5.58z"/>',
  },
]
