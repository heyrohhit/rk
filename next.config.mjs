/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
      },
      images: {
        domains: ["drive.google.com","images.unsplash.com"],
      },
};

export default nextConfig;
