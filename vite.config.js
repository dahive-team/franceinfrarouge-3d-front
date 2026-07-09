import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  return {
    base:
      mode === "production"
        ? "https://franceinfrarouge-website.dev.dahive.fr/wp-content/themes/composer-child/usine3d/"
        : "/",
    plugins: [react()],

    optimizeDeps: {
      include: [
        "three",
        "@react-three/fiber",
        "@react-three/drei",
        "framer-motion",
      ],
    },

    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
          entryFileNames: "assets/usine3d-fir-bundle.js",
          assetFileNames: "assets/[name].[ext]",
          chunkFileNames: "assets/[name].js",
        },
      },
    },
  };
});
