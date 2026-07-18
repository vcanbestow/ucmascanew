/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // Static export ke liye
  basePath: '/ucmasnext',  // Subfolder routing ke liye
  trailingSlash: true,     // <--- ADD THIS LINE (Fixes the 403 folder issue)
  
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