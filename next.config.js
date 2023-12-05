/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.wanted.co.kr',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/todos/deleted_forever',
                destination: '/todos',
                permanent: true,
            },
            {
                source: '/todos/deleted_temp',
                destination: '/todos',
                permanent: false,
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: '/userInfo',
                destination: '/about/mypage/userInfo',
            },
            {
                source: '/list/:slug',
                destination: '/todos/:slug',
            },
        ];
    },
};

module.exports = nextConfig;
