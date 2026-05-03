# Portafolio Personal — Vanesa Herrera Marulanda

Portafolio personal desarrollado como **Proyecto Evaluativo 1** del curso de **Ingeniería Web** (Universidad de Antioquia), que presenta mi perfil profesional, conocimientos, historial educativo y proyectos como estudiante de Ingeniería de Sistemas.

---

## Propósito

Este proyecto tiene como objetivo construir una hoja de vida interactiva y moderna que permita:

- Presentar mi perfil profesional de forma visual y atractiva
- Mostrar mis conocimientos técnicos, idiomas y habilidades
- Documentar mi historial educativo
- Exhibir proyectos del portafolio con información detallada

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| [Next.js 15](https://nextjs.org/) | Framework principal con App Router |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático |
| [TailwindCSS](https://tailwindcss.com/) | Estilos utilitarios |
| [Lucide React](https://lucide.dev/) | Iconos SVG |

---

## Estructura del proyecto

```
app/
├── components/
│   ├── atoms/                  # Componentes mínimos reutilizables
│   │   ├── Avatar.tsx          # Foto de perfil circular
│   │   ├── Badge.tsx           # Etiqueta decorativa
│   │   ├── SectionTitle.tsx    # Título con línea decorativa
│   │   └── SkillBar.tsx        # Barra de progreso de habilidades
│   ├── molecules/              # Combinación de átomos
│   │   ├── ContactItem.tsx     # Ítem de contacto con icono
│   │   ├── EducationCard.tsx   # Card de historial educativo
│   │   ├── KnowledgeCard.tsx   # Card de conocimiento
│   │   ├── PortfolioCard.tsx   # Card de proyecto
│   │   └── ProjectDialog.tsx   # Modal de detalle de proyecto
│   └── organisms/              # Secciones completas de la página
│       ├── LeftSidebar.tsx     # Menú lateral izquierdo fijo
│       ├── RightSidebar.tsx    # Menú lateral derecho (redes sociales)
│       ├── ProfileSection.tsx  # Sección de perfil
│       ├── KnowledgeSection.tsx
│       ├── EducationSection.tsx
│       ├── PortfolioSection.tsx
│       └── Footer.tsx
├── globals.css                 # Variables de color y estilos globales
├── layout.tsx                  # Layout raíz con metadatos
└── page.tsx                    # Página principal
public/
└── foto.jpg                    # Foto de perfil
```

El proyecto sigue el patrón de **Atomic Design**: los componentes se construyen de menor a mayor complejidad (átomos → moléculas → organismos), lo que facilita la reutilización y el mantenimiento del código.

---

## Cómo ejecutar localmente

### Requisitos previos
- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/vanesa-herreramarulanda/vanesa-herreramarulanda-portafolio.git
cd vanesa-herreramarulanda-portafolio

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### Otros comandos útiles

```bash
npm run build    # Compilar para producción
npm run start    # Ejecutar la build de producción
npm run lint     # Verificar errores de código
```

---

## Despliegue

El proyecto está desplegado en Vercel:

🔗 **[vanesa-herreramarulanda.vercel.app](https://vanesa-herreramarulanda.vercel.app/)**

---

## Decisiones de diseño

- **Paleta de colores:** Tonalidades morado/lila (`#7c3aed` como color primario) definidas como variables CSS en `globals.css`, lo que permite cambiar el tema editando un solo archivo
- **Layout de tres columnas:** Sidebar izquierdo fijo → contenido central con scroll → sidebar derecho fijo.
- **Diálogos interactivos:** La sección de perfil y cada card del portafolio tienen modales con información adicional, que se cierran con clic fuera o con la tecla Escape
- **Scroll horizontal:** La sección de portafolio usa scroll horizontal con `scroll-snap` para una navegación fluida entre proyectos

---

## Autora

**Vanesa Herrera Marulanda**  
Estudiante de Ingeniería de Sistemas — Universidad de Antioquia  
vanesa.herrera1@udea.edu.co  
---
