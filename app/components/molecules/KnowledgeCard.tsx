/**
 * KnowledgeCard — Molécula
 * Card que muestra un conocimiento con icono SVG, título y descripción.
 * Usada en la sección "Conocimientos" del contenido central.
 */

import { ReactNode } from 'react';

interface KnowledgeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function KnowledgeCard({ icon, title, description }: KnowledgeCardProps) {
  return (
    <div
      className="flex flex-col items-start p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{
        backgroundColor: 'white',
        border: '1px solid #ede9fe',
        boxShadow: '0 2px 12px rgba(124, 58, 237, 0.08)',
      }}
    >
      {/* Icono con fondo de color */}
      <div
        className="p-3 rounded-xl mb-3"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))',
          color: 'white',
        }}
      >
        {icon}
      </div>
      {/* Título */}
      <h3
        className="font-semibold text-base mb-1"
        style={{ color: 'var(--color-primary-dark)' }}
      >
        {title}
      </h3>
      {/* Descripción */}
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
