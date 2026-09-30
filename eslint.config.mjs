import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  globalIgnores(['.next/**', 'out/**', 'dist/**', 'test-results/**', 'playwright-report/**']),
  {
    rules: {
      // Full document navigation reinitializes the shared DOM behavior script.
      '@next/next/no-html-link-for-pages': 'off',
      // This static export intentionally serves ordinary images and external fonts.
      '@next/next/no-img-element': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  },
]);
