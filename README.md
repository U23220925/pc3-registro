# Módulo de Registro - Angular CI/CD (PC3)

- **URL Desplegada:** https://u23220925.github.io/pc3-registro/registro
- **Integrantes:** Nicolas (`U23220925`), Alexander (`Alexander08S-C`), Herbert (`herbertmorales1990-barbonautas`)

## Flujo CI/CD en GitHub Actions
- **Integración Continua (`ci`):** Se ejecuta en cada `push` y `pull_request` hacia `main`. Instala dependencias (`npm ci`), corre las 8 pruebas unitarias con Vitest (`npm test -- --watch=false`) y compila la aplicación en producción (`npm run build`). Si alguna prueba falla, el pipeline se detiene y bloquea el despliegue.
- **Entrega Continua (`deploy`):** Depende de `ci` (`needs: ci`) y solo se ejecuta cuando el evento es un `push` directo a `main` (`if: github.event_name == 'push' && github.ref == 'refs/heads/main'`), evitando que un Pull Request publique cambios en producción. La autenticación hacia GitHub Pages se realiza de forma segura mediante `GITHUB_TOKEN` / OIDC (`id-token: write`).

## Detalles de Compilación y Despliegue
- **Directorio publicado:** `dist/pc3-registro/browser`
- **Archivos generados:** `index.html`, `main-*.js`, `styles-*.css`, `404.html` (para soporte de rutas SPA al recargar `/registro`) y `favicon.ico`.
- **¿Por qué no se publica el código fuente (`src/`)?** Porque los navegadores no interpretan TypeScript ni plantillas de Angular; el proceso de `build` compila, optimiza y minifica el código a JavaScript estándar, evitando además exponer dependencias (`node_modules`), archivos de prueba (`.spec.ts`) o configuraciones internas.
