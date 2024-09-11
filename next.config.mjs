import { createProxyMiddleware } from "http-proxy-middleware";

/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "api.dicebear.com"],
    dangerouslyAllowSVG: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://43.203.238.76:8000/:path*", // Proxy to external API
      },
    ];
  },
};

export default nextConfig;
