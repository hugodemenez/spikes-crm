/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/deals',
            permanent: true,
          },
        ]
      },
    images: {
    },
};

export default nextConfig;
