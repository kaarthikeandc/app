/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zwyhkqugtactltbiftio.supabase.co",
        pathname: "/storage/v1/object/public/projects/**",
      },
    ],
  },
};

module.exports = nextConfig;
