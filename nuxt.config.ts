import type { NuxtPage } from "nuxt/schema";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  srcDir: 'src/app/',
  serverDir: 'src/server/',

  devServer: {
    host: 'localhost',
    port: 50007,
  },

  vue: {
    runtimeCompiler: true,
  },

  build: {
    transpile: [],
  },

  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan all modules within given directory
      'composables/**',
    ],
  },

  components: {
    dirs: [{
      path: '@/components',
      pathPrefix: false,
      extensions: ['.vue',],
    },],
  },

  hooks: {
    'pages:extend'(pages: any) {
      const pagesToRemove: NuxtPage[] = [];
      pages.forEach((page: any) => {
        if (page.path.includes('components')) pagesToRemove.push(page);
        if (page.path.includes('composables')) pagesToRemove.push(page);
      });

      pagesToRemove.forEach((page: NuxtPage) => {
        pages.splice(pages.indexOf(page), 1);
      });
    },
  },

  sourcemap: {
    server: true,
    client: true,
  },

  compatibilityDate: '2024-08-25',
})
