/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    allowedDevOrigins: ["http://10.0.12.57"], // ✅ Ajoute ton IP ici
  },
}
 
module.exports = {
    experimental: {
        allowedDevOrigins: ["http://localhost:3000"]
    }
};