import type { NextConfig } from "next";

// Cloudflare R2 public bucket host. Set NEXT_PUBLIC_R2_HOST in the Vercel
// project (e.g. "assets.spookyactionpark.com" or "<id>.r2.dev") to serve
// optimized images from R2 via next/image.
const r2Host = process.env.NEXT_PUBLIC_R2_HOST;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: r2Host
      ? [{ protocol: "https", hostname: r2Host }]
      : [
          // Default to *.r2.dev dev URLs until a custom domain is wired up.
          { protocol: "https", hostname: "**.r2.dev" },
        ],
  },
};

export default nextConfig;
