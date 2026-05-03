/**
 * LeftSidebar — Organismo
 * Menú lateral izquierdo fijo. Contiene:
 * - Información personal (foto, nombre, título)
 * - Datos de contacto
 * - Idiomas
 * - Lenguajes de programación
 * - Habilidades extra
 */

import Avatar from '../atoms/Avatar';
import SkillBar from '../atoms/SkillBar';
import Badge from '../atoms/Badge';
import ContactItem from '../molecules/ContactItem';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function LeftSidebar() {
  // Datos de contacto 
  const contactData = [
    { icon: <MapPin size={14} />, text: 'Medellín, Colombia' },
    { icon: <Phone size={14} />, text: '+57 322 695 6944' },
    { icon: <Mail size={14} />, text: 'vaneherre155@gmail.com', href: 'mailto:vaneherre155@gmail.com' },
    { icon: <Globe size={14} />, text: 'linkedin.com/in/vanesaherreram', href: 'https://linkedin.com/in/vanesaherreram' },
  ];

  // Idiomas
  const languages = [
    { label: 'Español', percentage: 100 },
    { label: 'Inglés',  percentage: 70  },
  ];

  // Lenguajes de programación
  const programmingLanguages = [
    { label: 'Python',     percentage: 80 },
    { label: 'JavaScript', percentage: 75 },
    { label: 'Java',       percentage: 60 },
    { label: 'SQL',        percentage: 70 },
  ];

  // Habilidades extra
  const extraSkills = [
    'Trabajo en equipo',
    'Resolución de problemas',
    'Pensamiento crítico',
    'Comunicación efectiva',
    'Gestión del tiempo',
    'Metodologías ágiles',
    'Control de versiones (Git)',
  ];

  return (
    <aside
      className="w-64 min-h-screen flex-shrink-0 flex flex-col overflow-y-auto"
      style={{ backgroundColor: 'var(--color-bg-sidebar)' }}
    >
      {/* Información personal */}
        <div className="flex flex-col items-center text-center px-6 pt-10 pb-6">
          <Avatar src="/foto.jpg" alt="Vanesa" size="md" rounded="xl" />
          <h1
            className="mt-4 text-lg font-bold leading-snug"
            style={{ color: 'var(--color-text-light)' }}
          >
            Vanesa Herrera Marulanda
          </h1>
          <p
            className="text-sm mt-1"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Estudiante Ingeniería de Sistemas
          </p>
        </div>

      {/* Divisor */}
      <hr style={{ borderColor: '#3d2f6b', margin: '0 1.5rem' }} />

      {/* Datos de contacto */}
      <section className="px-6 py-5">
        <h2
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: 'var(--color-primary-light)' }}
        >
          Contacto
        </h2>
        {contactData.map((item, i) => (
          <ContactItem key={i} icon={item.icon} text={item.text} href={item.href} />
        ))}
      </section>

      <hr style={{ borderColor: '#3d2f6b', margin: '0 1.5rem' }} />

      {/* Idiomas */}
      <section className="px-6 py-5">
        <h2
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: 'var(--color-primary-light)' }}
        >
          Idiomas
        </h2>
        {languages.map((lang) => (
          <SkillBar key={lang.label} label={lang.label} percentage={lang.percentage} />
        ))}
      </section>

      <hr style={{ borderColor: '#3d2f6b', margin: '0 1.5rem' }} />

      {/* Lenguajes de programación */}
      <section className="px-6 py-5">
        <h2
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: 'var(--color-primary-light)' }}
        >
          Lenguajes de Programación
        </h2>
        {programmingLanguages.map((lang) => (
          <SkillBar key={lang.label} label={lang.label} percentage={lang.percentage} />
        ))}
      </section>

      <hr style={{ borderColor: '#3d2f6b', margin: '0 1.5rem' }} />

      {/* Habilidades extra */}
      <section className="px-6 py-5 pb-10">
        <h2
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: 'var(--color-primary-light)' }}
        >
          Habilidades Extra
        </h2>
        <div className="flex flex-wrap">
          {extraSkills.map((skill) => (
            <Badge key={skill} text={skill} />
          ))}
        </div>
      </section>
    </aside>
  );
}
