/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["bcrypt", "mapbox-gl"],
    },
};

export default nextConfig;
