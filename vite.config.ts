import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core bundles (critical)
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          
          // UI components (lazy load)
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-navigation-menu'],
          forms: ['@radix-ui/react-select', '@radix-ui/react-label', 'react-hook-form', '@hookform/resolvers'],
          
          // Icons (lazy load)
          icons: ['lucide-react'],
          
          // Utilities
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority'],
          
          // Analytics and performance (non-critical)
          analytics: ['@tanstack/react-query'],
          
          // Heavy dependencies
          motion: ['framer-motion']
        }
      }
    },
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false,
    target: 'es2020'
  },
});
