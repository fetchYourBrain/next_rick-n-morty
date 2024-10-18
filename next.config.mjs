/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/next_rick-n-morty',
  assetPrefix: '/next_rick-n-morty',
  distDir: 'dist',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        port: "",
        pathname: "/api/character/avatar/**",
      },
      
    ],
  },
  
};

export default nextConfig;

