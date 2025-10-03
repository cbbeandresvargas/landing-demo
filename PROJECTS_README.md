# Cómo Agregar Nuevos Proyectos

## 📁 Estructura de Archivos

Para agregar un nuevo proyecto, solo necesitas editar **1 archivo JSON**:

```
src/data/
└── projects.json             # ← Archivo único con todos los proyectos
```

## 🖼️ Imagen del Proyecto

1. Agrega tu imagen en: `src/assets/images/projects/`
2. Nombres sugeridos: `mi-proyecto.jpg` o `mi-proyecto.png`
3. Tamaño recomendado: 1200x800px o similar

## 📝 Estructura del Archivo JSON

Edita el archivo `src/data/projects.json` y agrega tu proyecto:

### Estructura del proyecto:
```json
{
  "id": "mi-proyecto",                    // ID único del proyecto
  "title": {
    "en": "My Project Name",             // Título en inglés
    "es": "Nombre de Mi Proyecto"        // Título en español
  },
  "description": {
    "en": "Brief description",           // Descripción en inglés
    "es": "Descripción breve"            // Descripción en español
  },
  "link": "https://mi-proyecto-url.com", // URL del proyecto
  "image": "mi-proyecto.jpg",            // Nombre del archivo de imagen
  "pubDate": "2024-01-15",               // Fecha de publicación
  "content": {
    "en": "Project content in English...", // Contenido en inglés
    "es": "Contenido del proyecto en español..." // Contenido en español
  }
}
```

### Contenido:
- **Párrafo 1**: Descripción general del proyecto
- **Párrafo 2**: Tecnologías utilizadas y enfoque
- **Lista de características**: 4-6 características clave
- **Párrafo final**: Resultado y impacto

## 🌐 Ejemplo Completo

Agrega este proyecto al array `projects` en `src/data/projects.json`:

```json
{
  "id": "ecommerce-platform",
  "title": {
    "en": "E-commerce Platform",
    "es": "Plataforma E-commerce"
  },
  "description": {
    "en": "Modern e-commerce solution with advanced features",
    "es": "Solución de comercio electrónico moderna con características avanzadas"
  },
  "link": "https://mi-tienda.com",
  "image": "ecommerce.jpg",
  "pubDate": "2024-01-15",
  "content": {
    "en": "This e-commerce platform was built for a fashion retailer looking to expand their online presence. The project required a modern, responsive design with advanced shopping cart functionality and payment integration.\n\nThe website was developed using Next.js, Stripe for payments, and a headless CMS for content management. The design focuses on creating an intuitive shopping experience that converts visitors into customers.\n\nKey project features:\n- Responsive design optimized for all devices\n- Advanced product filtering and search\n- Secure payment processing with Stripe\n- Admin dashboard for inventory management\n- SEO optimization for better visibility\n- Multi-language support\n\nThe final result increased online sales by 150% and provided a seamless shopping experience for customers.",
    "es": "Esta plataforma de comercio electrónico fue construida para un minorista de moda que buscaba expandir su presencia en línea. El proyecto requirió un diseño moderno y responsivo con funcionalidad avanzada de carrito de compras e integración de pagos.\n\nEl sitio web fue desarrollado usando Next.js, Stripe para pagos, y un CMS headless para gestión de contenido. El diseño se enfoca en crear una experiencia de compra intuitiva que convierte visitantes en clientes.\n\nCaracterísticas clave del proyecto:\n- Diseño responsivo optimizado para todos los dispositivos\n- Filtrado avanzado de productos y búsqueda\n- Procesamiento seguro de pagos con Stripe\n- Panel de administración para gestión de inventario\n- Optimización SEO para mejor visibilidad\n- Soporte multiidioma\n\nEl resultado final aumentó las ventas en línea en un 150% y proporcionó una experiencia de compra fluida para los clientes."
  }
}
```

## ✅ Pasos para Agregar un Proyecto

1. **Abre** `src/data/projects.json`
2. **Agrega** tu proyecto al array `projects`
3. **Sigue** la estructura del ejemplo mostrado arriba
4. **Agrega** tu imagen en `src/assets/images/projects/`
5. **Actualiza** la referencia a la imagen en el campo `image`
6. **Ejecuta** `npm run dev` para ver los cambios

## 🚀 Resultado

Tu nuevo proyecto aparecerá automáticamente en:
- Página principal (sección de proyectos)
- `/work/tu-proyecto` (inglés)
- `/es/work/tu-proyecto` (español)

¡Listo! Tu proyecto estará visible en el sitio web.
