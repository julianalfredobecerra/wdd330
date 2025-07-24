import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: "/index.html",
        cart: "cart/index.html",
        checkout: "checkout/index.html",
        product: "product_pages/index.html",
        listing: "product_listing/index.html",
      },
    },
  },
});