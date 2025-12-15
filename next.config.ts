import type { NextConfig } from "next";

const branchName = process.env.REPOSITORY_NAME 
    ? "/" + process.env.REPOSITORY_NAME 
    : "";

console.log(`REPOSITORY_NAME: ${process.env.REPOSITORY_NAME}`);

const nextConfig: NextConfig = {
    output: "export",           // next build 実行の際に Static Export を利用する
    assetPrefix: branchName,
    basePath: branchName,
};

export default nextConfig;
