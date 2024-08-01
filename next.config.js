/** @type {import('next').NextConfig} */
const API_URL = process.env.API_URL

const nextConfig = {
  
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
       
        },
      ],
    },
};

export default nextConfig;



