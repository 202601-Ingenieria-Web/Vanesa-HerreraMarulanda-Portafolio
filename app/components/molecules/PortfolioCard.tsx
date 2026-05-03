/**
 * PortfolioCard — Molécula
 * Card de proyecto del portafolio con imagen, título, descripción
 * y botón "Saber más" que abre un diálogo con detalles.
 */

'use client';

import { useState } from 'react';
import ProjectDialog from './ProjectDialog';

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl?: string;         // URL de imagen del proyecto
  detailDescription: string; // Descripción larga para el diálogo
  links?: { label: string; url: string }[];
  technologies?: string[];
}

export default function PortfolioCard({
  title,
  description,
  imageUrl,
  detailDescription,
  links = [],
  technologies = [],
}: PortfolioCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        className="flex-shrink-0 w-72 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        style={{
          backgroundColor: 'white',
          border: '1px solid #ede9fe',
          boxShadow: '0 2px 12px rgba(124, 58, 237, 0.1)',
        }}
      >
        {/* Imagen o placeholder */}
        <div
          className="w-full h-40 flex items-center justify-center text-5xl"
          style={{
            background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary-light))',
          }}
        >
          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          ) : (
            <span>🖥️</span>
          )}
        </div>

        {/* Contenido */}
        <div className="p-4">
          <h3
            className="font-bold text-base mb-1"
            style={{ color: 'var(--color-primary-dark)' }}
          >
            {title}
          </h3>
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">{description}</p>

          {/* Botón "Saber más" */}
          <button
            onClick={() => setOpen(true)}
            className="text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))',
              color: 'white',
            }}
          >
            Saber más
          </button>
        </div>
      </div>

      {/* Diálogo de detalle */}
      {open && (
        <ProjectDialog
          title={title}
          description={detailDescription}
          links={links}
          technologies={technologies}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
