import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    // /kvnsky is unlisted: noindex via header so the static HTML files in
    // public/kvnsky/ are covered too. Deliberately NOT in robots.txt - a
    // Disallow line would advertise the path.
    return [
      {
        source: "/kvnsky",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/kvnsky/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
