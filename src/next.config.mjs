/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    distDir: './dist', // Changes the build output directory to `./dist/`.
  }
   
  export default nextConfig