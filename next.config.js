/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
            },
            {
                protocol: 'https',
                hostname: 'pbs.twimg.com',
            },
        ],
    },
    // Next 15: moved from experimental.serverComponentsExternalPackages
    serverExternalPackages: [
        '@react-email/render',
    ],
}

module.exports = nextConfig
