import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 200000, // Batas ukuran chunk untuk peringatan
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Mengatur pengelompokan kode berdasarkan kondisi yang sesuai
          if (id.includes('node_modules')) {
            return 'vendor'; // Mengelompokkan kode dari node_modules ke chunk "vendor"
          } else if (id.includes('src/utils')) {
            return 'utils'; // Mengelompokkan kode dari direktori "utils" ke chunk "utils"
          } else if (id.includes('src/component')) {
            return 'component'
          } else if (id.includes('src/hoc')) {
            return 'hoc'
          }
          // Mengembalikan nilai default (mengelompokkan kode ke dalam chunk default)
          return 'main';
        },
      },
    },
  },
  
  
})
