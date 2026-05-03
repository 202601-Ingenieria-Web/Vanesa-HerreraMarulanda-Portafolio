/**
 * ProfileSection — Organismo
 * Sección de perfil. Contiene:
 * - Nombre e imagen
 * - Descripción profesional
 * - Botón que abre un diálogo con información adicional
 */

'use client';

import { useState } from 'react';
import Avatar from '../atoms/Avatar';
import SectionTitle from '../atoms/SectionTitle';

export default function ProfileSection() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section
      id="perfil"
      className="rounded-3xl p-8 mb-6 animate-fadeInUp"
      style={{ backgroundColor: 'white', boxShadow: '0 2px 16px rgba(124,58,237,0.08)' }}
    >
      <SectionTitle title="Perfil" />

      {/* Tarjeta de perfil */}
        <div className="flex flex-col sm:flex-row items-stretch gap-6">

          {/* Texto */}
          <div className="flex flex-col justify-between text-center sm:text-left flex-1 min-w-0">
            <div>
              <h1
                className="text-3xl font-extrabold tracking-tight"
                style={{ color: 'var(--color-primary-dark)' }}
              >
                Vanesa Herrera Marulanda
              </h1>
              <p
                className="text-sm font-medium mt-1 mb-3"
                style={{ color: 'var(--color-primary)' }}
              >
                Ingeniera de Sistemas en Formación · Medellín, Colombia
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Soy una estudiante apasionada por el desarrollo de software y la automatización, 
                motivada por crear soluciones tecnológicas capaces de transformar procesos y generar 
                un impacto real. Me inspira el poder de la tecnología para optimizar, conectar e innovar, 
                especialmente a través del desarrollo web moderno y los sistemas inteligentes. 
                Disfruto trabajar en equipo, aprender constantemente y aportar ideas en entornos 
                colaborativos guiados por metodologías ágiles.
              </p>
            </div>

            {/* Botón pegado abajo del texto */}
            <button
              onClick={() => setDialogOpen(true)}
              className="mt-5 self-center sm:self-start px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))',
                color: 'white',
              }}
            >
              Conocer más sobre mí
            </button>
          </div>

          {/* Avatar */}
          <div
            className="relative w-full sm:w-64 h-64 sm:h-80 flex-shrink-0 rounded-2xl overflow-hidden"
            style={{
              boxShadow: '0 4px 20px rgba(124, 58, 237, 0.25)',
            }}
          >
            <Avatar
              src="/foto.jpg"
              alt="Vanesa"
              fill
              rounded="xl"
            />
          </div>

        </div>

      {/* Diálogo de información adicional */}
      {dialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          onClick={() => setDialogOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-fadeInUp"
            style={{ backgroundColor: 'white', maxHeight: '85vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barra decorativa */}
            <div
              className="h-2 w-20 rounded-full mb-6"
              style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))' }}
            />

            <div className="flex items-center gap-4 mb-4">
              <Avatar src="/foto.jpg" alt="Vanesa" size="md" />
              <div>
                <h2 className="text-xl font-bold" style={{ color: 'var(--color-primary-dark)' }}>
                  Vanesa Herrera Marulanda
                </h2>
                <p className="text-sm" style={{ color: 'var(--color-primary)' }}>
                  Estudiante Ingeniería de Sistemas
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Soy estudiante de Ingeniería de Sistemas en la Universidad de Antioquia, con una gran pasión por el desarrollo web
              y la automatización de procesos mediante tecnología inteligente. A lo largo de mi 
              formación he fortalecido mis conocimientos en algoritmos, estructuras de datos, 
              bases de datos y desarrollo de aplicaciones modernas, construyendo una visión orientada 
              a crear soluciones eficientes, escalables e innovadoras. Me motiva aprender continuamente,
              enfrentar nuevos retos tecnológicos y desarrollar herramientas que aporten valor real y 
              optimicen la forma en que las personas y las organizaciones interactúan con la tecnología.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Me apasiona explorar nuevas tecnologías y convertir el aprendizaje en soluciones reales 
              que generen impacto. Disfruto enfrentar desafíos, adaptarme a entornos innovadores y 
              participar en proyectos donde la creatividad y la tecnología se unen para optimizar 
              procesos y crear valor.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Next.js', 'React', 'Python', 'Java', 'SQL', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{ backgroundColor: '#ede9fe', color: 'var(--color-primary-dark)' }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <button
              onClick={() => setDialogOpen(false)}
              className="w-full py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))',
                color: 'white',
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
