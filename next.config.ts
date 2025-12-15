import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

console.log(`BASE_PATH: ${process.env.NEXT_PUBLIC_BASE_PATH}`);

const nextConfig: NextConfig = {
    output: "export",           // next build 実行の際に Static Export を利用する
    reactStrictMode: true,
    // assetPrefix: basePath ? `${basePath}/` : undefined,
    // basePath: basePath,
    // images: {
    //     unoptimized: true, // GitHub Pages では必須
    // },
};

export default nextConfig;
