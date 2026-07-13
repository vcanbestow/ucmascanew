/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // Static export ke liye
  basePath: '/ucmasnext',  // Subfolder routing ke liye
  
  images: {
    unoptimized: true,    // Static export me images ke liye compulsory hai
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;