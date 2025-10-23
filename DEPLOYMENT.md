# Guía de Despliegue - Ramu Solutions

## 🚀 Despliegue en Vercel (Recomendado)

Vercel es la plataforma recomendada para Next.js con configuración cero.

### Pasos:

1. **Crear cuenta en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Regístrate con tu cuenta de GitHub

2. **Importar proyecto**
   - Click en "Add New Project"
   - Selecciona este repositorio
   - Vercel detectará automáticamente Next.js

3. **Configurar dominio**
   - En la configuración del proyecto, agrega tu dominio personalizado
   - Actualiza el `metadataBase` en `src/app/layout.tsx` con tu dominio real

4. **Variables de entorno** (opcional)
   - No necesarias por ahora
   - Puedes añadir más tarde si integras APIs

## 🌐 Configuración de SEO para Producción

Antes de desplegar, actualiza estos valores:

### 1. En `src/app/layout.tsx`:
```typescript
metadataBase: new URL('https://tudominio.com'), // Tu dominio real
```

### 2. Verificación de Google Search Console:
```typescript
verification: {
  google: 'tu-codigo-de-verificacion', // Obtener de Google Search Console
}
```

### 3. En `public/robots.txt`:
```
Sitemap: https://tudominio.com/sitemap.xml
```

### 4. En `src/app/page.tsx` (JSON-LD):
Actualiza las URLs con tu dominio real.

## 📊 Después del Despliegue

### Google Search Console
1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Añade tu propiedad (dominio)
3. Verifica la propiedad
4. Envía el sitemap: `https://tudominio.com/sitemap.xml`

### Google Analytics (opcional)
Añade el script de Google Analytics en `layout.tsx` si deseas analíticas.

### Redes Sociales
Prueba cómo se ve tu sitio en:
- **Facebook Debugger**: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug)
- **Twitter Card Validator**: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)

## 🎨 Personalización Adicional

### Logo y Favicon
Reemplaza `/public/favicon.ico` con tu logo real:
- Favicon: 32x32px o 16x16px
- Usa herramientas como [favicon.io](https://favicon.io)

### Open Graph Image
Crea una imagen de 1200x630px para redes sociales:
- Guárdala como `/public/og-image.jpg`
- Diseño recomendado: logo + texto descriptivo

## 🔍 Verificación de SEO

Usa estas herramientas para verificar tu SEO:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

## 📱 Contacto y Redes Sociales

Actualiza los enlaces en `src/app/page.tsx`:
- Email real de contacto
- Número de teléfono real
- Perfiles de LinkedIn y Twitter

## ⚡ Optimizaciones Adicionales

Para mejorar aún más el rendimiento:
1. Añadir imágenes optimizadas con Next.js Image component
2. Implementar lazy loading para secciones
3. Añadir más páginas (blog, casos de éxito, etc.)
4. Integrar formulario de contacto con backend
