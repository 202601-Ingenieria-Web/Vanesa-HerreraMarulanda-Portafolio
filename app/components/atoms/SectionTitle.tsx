/**
 * SectionTitle — Átomo
 * Título de sección con línea decorativa de color primario.
 * Se reutiliza en todas las secciones del contenido central.
 */

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold tracking-wide" style={{ color: 'var(--color-primary-dark)' }}>
        {title}
      </h2>
      {/* Línea decorativa */}
      <div
        className="mt-1 h-1 w-12 rounded-full"
        style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))' }}
      />
    </div>
  );
}
