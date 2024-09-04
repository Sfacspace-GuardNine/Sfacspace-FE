/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "api.dicebear.com"],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
