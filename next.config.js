/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // images:{
        //     remotePatterns:[
        //         {
        //             protocol: 'https',
        //             hostname: 'cdn.jsdelivr.net',
        //         }
        //     ]
        // }
    },
    // Next 15: moved from experimental.serverComponentsExternalPackages
    serverExternalPackages: [
        '@react-email/render',
    ],
}

module.exports = nextConfig
