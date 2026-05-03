/**
 * PortfolioSection — Organismo
 * Sección de portafolio con scroll horizontal.
 * Cada proyecto se muestra en un PortfolioCard con botón "Saber más".
 */

import SectionTitle from '../atoms/SectionTitle';
import PortfolioCard from '../molecules/PortfolioCard';

const projects = [
  {
    title: 'Portafolio',
    description: 'Portafolio personal desarrollado con Next.js, TypeScript y TailwindCSS.',
    detailDescription:
      'Este es el portafolio personal desarrollado como proyecto evaluativo del curso de Ingeniería Web. ' +
      'Implementa Atomic Design, rutas de Next.js, estilos con TailwindCSS y despliegue en Vercel.',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'React'],
    links: [{ label: 'GitHub', url: 'https://github.com/202601-Ingenieria-Web/Vanesa-HerreraMarulanda-Portafolio/tree/main' }],
  },
  {
    title: 'Próximamente',
    description: 'Este espacio está reservado para futuros proyectos.',
    detailDescription: 'Este espacio está reservado para futuros proyectos.',
    technologies: [],
    links: [],
  },
  {
    title: 'Próximamente',
    description: 'Este espacio está reservado para futuros proyectos.',
    detailDescription: 'Este espacio está reservado para futuros proyectos.',
    technologies: [],
    links: [],
  },
];

export default function PortfolioSection() {
  return (
    <section id="portafolio" className="mb-6 animate-fadeInUp">
      <div
        className="rounded-3xl p-8"
        style={{ backgroundColor: 'white', boxShadow: '0 2px 16px rgba(124,58,237,0.08)' }}
      >
        <SectionTitle title="Portafolio" />
        <p className="text-sm text-gray-500 mb-4">
          Desliza horizontalmente para ver los proyectos →
        </p>

        {/* Scroll horizontal */}
        <div className="scroll-x flex gap-4 pb-4">
          {projects.map((project, i) => (
            <PortfolioCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
