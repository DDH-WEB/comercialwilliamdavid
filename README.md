# Ferretería William David

Sitio web moderno y responsive para Ferretería William David, construido con las últimas tecnologías web.

## Tecnologías Utilizadas

- **Next.js 16** - Framework React con App Router
- **React 19** - Biblioteca de UI con Server Components
- **TypeScript** - Tipado estático para mejor desarrollo
- **Tailwind CSS v4** - Framework de utilidades CSS
- **Lucide React** - Iconos modernos y ligeros
- **shadcn/ui** - Componentes UI de alta calidad

## Características

### Rendimiento Optimizado
- Lazy loading de componentes con dynamic imports
- Optimización automática de imágenes con Next.js Image
- React.memo para prevenir re-renders innecesarios
- Hook personalizado useInView para animaciones eficientes
- GPU acceleration para animaciones suaves

### Diseño Responsive
- Mobile-first design
- Breakpoints optimizados para todos los dispositivos
- Menú hamburguesa en dispositivos móviles
- Navegación fluida en desktop

### Secciones

1. **Hero** - Página de bienvenida con imagen de fondo y llamado a la acción
2. **Nosotros** - Descripción de la empresa y valores
3. **Servicios** - Tres servicios principales:
   - Materiales de construcción
   - Herramientas profesionales
   - Delivery de gas a domicilio GRATIS
4. **Marcas** - Marcas reconocidas con las que trabaja la ferretería
5. **Contacto** - Información de contacto y ubicación

### Animaciones
- Fade in y slide up en secciones
- Animaciones al hacer scroll (scroll-triggered)
- Hover effects en tarjetas e imágenes
- Transiciones suaves en navegación

## Estructura del Proyecto

\`\`\`
├── app/
│   ├── layout.tsx          # Layout principal con metadata
│   ├── page.tsx             # Página principal
│   └── globals.css          # Estilos globales y temas
├── components/
│   ├── sections/            # Componentes de secciones
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── services.tsx
│   │   ├── brands.tsx
│   │   └── contact.tsx
│   └── ui/                  # Componentes UI reutilizables
│       ├── button.tsx
│       ├── card.tsx
│       ├── desktop-nav.tsx
│       └── mobile-menu.tsx
├── hooks/
│   └── use-in-view.ts       # Hook para detección de visibilidad
├── images/                   # Imágenes del sitio
│   ├── CWD-icon.png
│   ├── banner.jpg
│   ├── material-noble.jpg
│   ├── materila-plomeria.jpg
│   ├── Gas-natural.jpg
│   └── logo-*.png
└── lib/
    └── utils.ts             # Utilidades y helpers
\`\`\`

## Instalación y Desarrollo

\`\`\`bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar versión de producción
npm start
\`\`\`

## Optimizaciones Implementadas

1. **Code Splitting** - Carga dinámica de componentes pesados
2. **Image Optimization** - Formato WebP/AVIF automático
3. **Font Optimization** - Carga optimizada de fuentes con font-display: swap
4. **Tree Shaking** - Eliminación de código no utilizado
5. **Memoization** - React.memo en componentes que no necesitan re-renderizar
6. **Intersection Observer** - Para animaciones eficientes al scroll

## Contacto

- **Teléfono:** +51 969 921 621
- **Ubicación:** Jr. Huanuco con Jr. Cuzco, Pasco - Perú
- **Horario:** Lun - Sáb: 8:00 AM - 7:00 PM

## Licencia

© 2025 Ferretería William David. Todos los derechos reservados.
