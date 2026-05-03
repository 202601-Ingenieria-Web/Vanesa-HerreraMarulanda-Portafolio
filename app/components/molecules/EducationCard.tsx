/**
 * EducationCard — Molécula
 * Card que muestra un ítem del historial educativo.
 * Incluye institución, fechas, título obtenido y descripción.
 */

interface EducationCardProps {
  institution: string;
  dateRange: string;       
  degree: string;          
  description: string;
}

export default function EducationCard({
  institution,
  dateRange,
  degree,
  description,
}: EducationCardProps) {
  return (
    <div
      className="relative pl-6 pb-8 border-l-2"
      style={{ borderColor: 'var(--color-accent)' }}
    >
      {/* Punto en la línea de tiempo */}
      <div
        className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white"
        style={{ backgroundColor: 'var(--color-primary)' }}
      />

      {/* Fecha */}
      <span
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: 'var(--color-primary)' }}
      >
        {dateRange}
      </span>

      {/* Institución */}
      <h3
        className="font-bold text-base mt-0.5"
        style={{ color: 'var(--color-primary-dark)' }}
      >
        {institution}
      </h3>

      {/* Título */}
      <p className="text-sm font-medium text-gray-600 mb-1">{degree}</p>

      {/* Descripción */}
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
