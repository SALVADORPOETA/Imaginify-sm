import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      // Ignore TypeScript warnings related to the deployment process
      config.ignoreWarnings = [
        (warning: any) => warning.message.includes('TypeScript error'),
      ]
    }
    return config
  },
}

export default nextConfig
