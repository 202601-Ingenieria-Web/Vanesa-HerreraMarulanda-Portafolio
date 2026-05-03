/**
 * EducationSection — Organismo
 * Sección de historial educativo con timeline.
 * Usa el componente EducationCard en cada ítem.
 */

import SectionTitle from '../atoms/SectionTitle';
import EducationCard from '../molecules/EducationCard';

const educationItems = [
  {
    institution: 'Universidad de Antioquia',
    dateRange: '2021 – Presente',
    degree: 'Ingeniera de Sistemas',
    description:
      'El pregrado en Ingeniería de Sistemas forma profesionales capaces de diseñar, desarrollar y gestionar soluciones tecnológicas innovadoras. El programa integra conocimientos en software, sistemas inteligentes y transformación digital, con un enfoque basado en competencias y solución de problemas. Además, prepara a los estudiantes para enfrentar los retos de la Cuarta Revolución Industrial mediante tecnologías como Inteligencia Artificial, Blockchain e Internet de las Cosas. ' 
  },
  {
    institution: 'Servicio Nacional de Aprendizaje (SENA)',
    dateRange: '2020 – 2022',
    degree: 'Tecnóloga en Análisis y Desarrollo de Sistemas de Información',
    description:
      'La Tecnología en Análisis y Desarrollo de Sistemas de Información del SENA forma tecnólogos capaces de diseñar, desarrollar e implementar soluciones de software orientadas a las necesidades empresariales. El programa fortalece competencias en programación, bases de datos, análisis de requerimientos y desarrollo web, promoviendo el uso de metodologías y herramientas modernas para la transformación digital de las organizaciones.',
  },
  {
    institution: 'Institución Educativa Escuela Normal Superior "Claudina Múnera")',
    dateRange: '2017 – 2018',
    degree: 'Bachiller Académico con Profundización en Pedagogía',
    description:
      'La Escuela Normal Superior "Claudina Múnera" brinda una formación integral orientada al desarrollo académico, humano y pedagógico de los estudiantes. El programa fortalece competencias en educación, liderazgo y formación docente, promoviendo valores, pensamiento crítico y compromiso con la transformación social y educativa.',
  },
];

export default function EducationSection() {
  return (
    <section id="educacion" className="mb-6 animate-fadeInUp">
      <div
        className="rounded-3xl p-8"
        style={{ backgroundColor: 'white', boxShadow: '0 2px 16px rgba(124,58,237,0.08)' }}
      >
        <SectionTitle title="Educación" />
        <div className="ml-2">
          {educationItems.map((item) => (
            <EducationCard
              key={item.institution}
              institution={item.institution}
              dateRange={item.dateRange}
              degree={item.degree}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
