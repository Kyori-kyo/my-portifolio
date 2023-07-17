/** @type {import('next').NextConfig} */

export const images = {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'img.shields.io',
            port: '',
            pathname: '/badge/**',
        },
    ],
};

// const nextConfig = {}