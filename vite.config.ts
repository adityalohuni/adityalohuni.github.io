import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";

import remark_math from "remark-math";
import rehype_katex from "rehype-katex";
import rehypeprism from "rehype-prism-plus";

import remark_frontmatter from "remark-frontmatter";
import remark_mdx_frontmatter from "remark-mdx-frontmatter";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [
          remark_math,
          remark_frontmatter,
          remark_mdx_frontmatter,
        ],
        rehypePlugins: [rehype_katex, rehypeprism],
      }),
    },
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
