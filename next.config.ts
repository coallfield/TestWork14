import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
    sassOptions: {
        includePaths: [path.join(__dirname, 'src')],
        prependData: `@import "app/_variables.scss";`
    },
    eslint: {
        dirs: [path.join(__dirname, 'src')],
        ignoreDuringBuilds: true,

    }
};

export default nextConfig;
