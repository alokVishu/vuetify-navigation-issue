import { fileURLToPath, URL } from 'node:url'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
      styles: 'expose'
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [
        fileURLToPath(new URL('./src/plugins/i18n/locales/**', import.meta.url)),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
