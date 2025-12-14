import type { NextConfig } from "next";

const branchName = process.env.BRANCH_NAME 
    ? "/" + process.env.BRANCH_NAME 
    : "";

console.log(`BRANCH_NAME: ${process.env.BRANCH_NAME}`);

const nextConfig: NextConfig = {
    output: "export",           // next build 実行の際に Static Export を利用する
    assetPrefix: branchName,
    basePath: branchName,
};

export default nextConfig;
