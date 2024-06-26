import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/renteriaParcial2/', // Asegura que los recursos se sirvan desde el subdirectorio correcto
})
