/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        CDN: 'https://cdn.astrovoice.org',
        SESSION_KEY: 'avsn',
        CANONICAL_URL: 'https://www.astrovoice.org'
    },
    reactStrictMode: false
};

export default nextConfig;