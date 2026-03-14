export const siteConfig = {
  name: 'CB InfoTech',
  description:
    'Premium full-stack web development company offering world-class digital solutions. Websites, web apps, e-commerce, CRMs, and more starting at just ₹10,000.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cbinfotech.in',
  email: 'hello@cbinfotech.in',
}

export type SiteConfig = typeof siteConfig
