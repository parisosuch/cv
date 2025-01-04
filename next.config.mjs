/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REDIS_KEY: process.env.REDIS_KEY,
  },
  rewrites() {
    return {
      beforeFiles: [
        // if the host is `app.acme.com`,
        // this rewrite will be applied
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "app.parisosuch.com",
            },
          ],
          destination: "/app/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
