export const siteConfig = {
  name: 'CB InfoTech',
  description:
    'Premium full-stack web development company offering world-class digital solutions. Websites, e-commerce, web apps, CRMs, and more. Starting at ₹12,999 with dark/light mode and AI assistant support.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cbinfotech.in',
  email: 'hello@cbinfotech.in',
}

export type SiteConfig = typeof siteConfig
