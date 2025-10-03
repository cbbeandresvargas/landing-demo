# Cómo Agregar Nuevos Proyectos

## 📁 Estructura de Archivos

Para agregar un nuevo proyecto, necesitas crear **2 archivos** (uno en inglés y otro en español):

```
src/content/projects/
├── en/
│   ├── template.mdx          # ← Plantilla en inglés
│   └── mi-nuevo-proyecto.mdx # ← Tu nuevo proyecto en inglés
└── es/
    ├── template.mdx          # ← Plantilla en español  
    └── mi-nuevo-proyecto.mdx # ← Tu nuevo proyecto en español
```

## 🖼️ Imagen del Proyecto

1. Agrega tu imagen en: `src/assets/images/projects/`
2. Nombres sugeridos: `mi-proyecto.jpg` o `mi-proyecto.png`
3. Tamaño recomendado: 1200x800px o similar

## 📝 Estructura del Archivo MDX

Copia el archivo `template.mdx` y modifica:

### Frontmatter (metadatos):
```yaml
---
pubDate: 2024-01-15                    # Fecha de publicación
title: "Nombre de Tu Proyecto"         # Título del proyecto
description: "Descripción breve"       # Descripción corta
link: https://tu-proyecto-url.com      # URL del proyecto
image:
    source: "@assets/images/projects/tu-imagen.jpg"
    alt: "Descripción de la imagen"
---
```

### Contenido:
- **Párrafo 1**: Descripción general del proyecto
- **Párrafo 2**: Tecnologías utilizadas y enfoque
- **Lista de características**: 4-6 características clave
- **Párrafo final**: Resultado y impacto

## 🌐 Ejemplo Completo

### Inglés (`en/mi-proyecto.mdx`):
```yaml
---
pubDate: 2024-01-15
title: "E-commerce Platform"
description: "Modern e-commerce solution with advanced features"
link: https://mi-tienda.com
image:
    source: "@assets/images/projects/ecommerce.jpg"
    alt: "E-commerce platform homepage"
---

This e-commerce platform was built for a fashion retailer looking to expand their online presence. The project required a modern, responsive design with advanced shopping cart functionality and payment integration.

The website was developed using Next.js, Stripe for payments, and a headless CMS for content management. The design focuses on creating an intuitive shopping experience that converts visitors into customers.

Key project features:
- Responsive design optimized for all devices
- Advanced product filtering and search
- Secure payment processing with Stripe
- Admin dashboard for inventory management
- SEO optimization for better visibility
- Multi-language support

The final result increased online sales by 150% and provided a seamless shopping experience for customers.
```

### Español (`es/mi-proyecto.mdx`):
```yaml
---
pubDate: 2024-01-15
title: "Plataforma E-commerce"
description: "Solución de comercio electrónico moderna con características avanzadas"
link: https://mi-tienda.com
image:
    source: "@assets/images/projects/ecommerce.jpg"
    alt: "Página principal de la plataforma e-commerce"
---

Esta plataforma de comercio electrónico fue construida para un minorista de moda que buscaba expandir su presencia en línea. El proyecto requirió un diseño moderno y responsivo con funcionalidad avanzada de carrito de compras e integración de pagos.

El sitio web fue desarrollado usando Next.js, Stripe para pagos, y un CMS headless para gestión de contenido. El diseño se enfoca en crear una experiencia de compra intuitiva que convierte visitantes en clientes.

Características clave del proyecto:
- Diseño responsivo optimizado para todos los dispositivos
- Filtrado avanzado de productos y búsqueda
- Procesamiento seguro de pagos con Stripe
- Panel de administración para gestión de inventario
- Optimización SEO para mejor visibilidad
- Soporte multiidioma

El resultado final aumentó las ventas en línea en un 150% y proporcionó una experiencia de compra fluida para los clientes.
```

## ✅ Pasos para Agregar un Proyecto

1. **Copia** `template.mdx` en ambas carpetas (`en/` y `es/`)
2. **Renombra** los archivos con el nombre de tu proyecto
3. **Modifica** el contenido siguiendo la estructura del ejemplo
4. **Agrega** tu imagen en `src/assets/images/projects/`
5. **Actualiza** la referencia a la imagen en el frontmatter
6. **Ejecuta** `npm run dev` para ver los cambios

## 🚀 Resultado

Tu nuevo proyecto aparecerá automáticamente en:
- Página principal (sección de proyectos)
- `/work/tu-proyecto` (inglés)
- `/es/work/tu-proyecto` (español)

¡Listo! Tu proyecto estará visible en el sitio web.
