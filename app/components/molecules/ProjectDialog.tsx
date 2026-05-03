/**
 * ProjectDialog — Molécula
 * Diálogo/modal que muestra información detallada de un proyecto.
 * Se abre al presionar "Saber más" en un PortfolioCard.
 */

'use client';

import { useEffect } from 'react';
import Badge from '../atoms/Badge';

interface ProjectDialogProps {
  title: string;
  description: string;
  links?: { label: string; url: string }[];
  technologies?: string[];
  onClose: () => void;
}

export default function ProjectDialog({
  title,
  description,
  links = [],
  technologies = [],
  onClose,
}: ProjectDialogProps) {
  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    /* Fondo oscuro semitransparente */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      onClick={onClose}
    >
      {/* Panel del diálogo */}
      <div
        className="relative w-full max-w-md rounded-3xl p-6 shadow-2xl animate-fadeInUp"
        style={{ backgroundColor: 'white', maxHeight: '80vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()} // Evitar cierre al clickear dentro
      >
        {/* Cabecera */}
        <div
          className="h-2 w-16 rounded-full mb-4"
          style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))' }}
        />

        <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary-dark)' }}>
          {title}
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>

        {/* Tecnologías usadas */}
        {technologies.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Tecnologías
            </p>
            <div className="flex flex-wrap">
              {technologies.map((tech) => (
                <Badge key={tech} text={tech} />
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        {links.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Enlaces
            </p>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-medium hover:underline mb-1"
                style={{ color: 'var(--color-primary)' }}
              >
                🔗 {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="w-full py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90"
          style={{
            background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))',
            color: 'white',
          }}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
