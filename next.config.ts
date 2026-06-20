import type { NextConfig } from "next";

// Cloudflare R2 image hosts allowed for next/image optimization. The project's
// custom domain is always trusted; NEXT_PUBLIC_R2_HOST and *.r2.dev are added
// for flexibility (custom domain overrides, dev bucket URLs).
const r2Host = process.env.NEXT_PUBLIC_R2_HOST;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "r2.spookyactionpark.com" },
      { protocol: "https", hostname: "**.r2.dev" },
      ...(r2Host ? [{ protocol: "https" as const, hostname: r2Host }] : []),
    ],
  },
};

export default nextConfig;
