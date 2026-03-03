/**
 * Canonical base URL for the site. Set NEXT_PUBLIC_SITE_URL in production
 * (e.g. https://kennydop.com). Vercel sets VERCEL_URL automatically.
 */
export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://kennydop.com");
