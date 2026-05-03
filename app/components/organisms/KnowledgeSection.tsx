/**
 * KnowledgeSection — Organismo
 * Sección "Conocimientos" con cards de áreas de dominio.
 * Cada card incluye ícono SVG, título y descripción.
 */

import SectionTitle from '../atoms/SectionTitle';
import KnowledgeCard from '../molecules/KnowledgeCard';

// Íconos SVG simples (inline)
const icons = {
  web: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  db: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  git: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <line x1="6" y1="9" x2="6" y2="21" />
    </svg>
  ),
  algo: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M7 8h10M7 12h6" />
    </svg>
  ),
  agile: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
};

const knowledgeItems = [
  {
    icon: icons.web,
    title: 'Desarrollo Web Frontend',
    description: 'Creación de interfaces modernas con React, Next.js y TailwindCSS. Enfoque en usabilidad y diseño responsivo.',
  },
  {
    icon: icons.db,
    title: 'Bases de Datos',
    description: 'Diseño e implementación de bases de datos relacionales con SQL (MySQL, PostgreSQL) y nociones de NoSQL.',
  },
  {
    icon: icons.code,
    title: 'Programación Orientada a Objetos',
    description: 'Aplicación de principios POO en Java y Python para construir sistemas escalables y mantenibles.',
  },
  {
    icon: icons.git,
    title: 'Control de Versiones',
    description: 'Manejo de Git y GitHub para trabajo colaborativo, gestión de ramas y flujos de trabajo profesionales.',
  },
  {
    icon: icons.algo,
    title: 'Algoritmos y Estructuras de Datos',
    description: 'Análisis de complejidad, implementación de estructuras como árboles, grafos y algoritmos de búsqueda/ordenamiento.',
  },
  {
    icon: icons.agile,
    title: 'Metodologías Ágiles',
    description: 'Conocimiento de Scrum y Kanban para la gestión eficiente de proyectos de software en equipo.',
  },
];

export default function KnowledgeSection() {
  return (
    <section id="conocimientos" className="mb-6 animate-fadeInUp">
      <div
        className="rounded-3xl p-8"
        style={{ backgroundColor: 'white', boxShadow: '0 2px 16px rgba(124,58,237,0.08)' }}
      >
        <SectionTitle title="Conocimientos" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {knowledgeItems.map((item) => (
            <KnowledgeCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
