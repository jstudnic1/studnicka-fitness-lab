import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import Sitemap from 'vite-plugin-sitemap';
import { blogData } from './src/data/blogData'; // Import blog data for dynamic routes
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const siteUrl = "https://www.trenermb.cz/"; // IMPORTANT: Replace with your actual deployed URL

  const dynamicRoutes = blogData.map(post => `/blog/${post.slug}`);

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      Sitemap({
        hostname: siteUrl,
        dynamicRoutes: dynamicRoutes,
        // Optional: Change frequency and priority
        // sitemap: [
        //   { path: '/', changefreq: 'daily', priority: 1 },
        //   { path: '/blog', changefreq: 'weekly', priority: 0.8 },
        // ],
      }),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
