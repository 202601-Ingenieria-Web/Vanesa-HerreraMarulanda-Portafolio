/**
 * SkillBar — Átomo
 * Muestra una habilidad con su porcentaje de dominio.
 * Se reutiliza en idiomas y lenguajes de programación.
 */

interface SkillBarProps {
  label: string;
  percentage: number; // 0 - 100
}

export default function SkillBar({ label, percentage }: SkillBarProps) {
  return (
    <div className="mb-3">
      {/* Nombre + porcentaje */}
      <div className="flex justify-between text-sm mb-1" style={{ color: 'var(--color-text-light)' }}>
        <span>{label}</span>
        <span style={{ color: 'var(--color-accent)' }}>{percentage}%</span>
      </div>
      {/* Barra de fondo */}
      <div className="w-full rounded-full h-1.5" style={{ backgroundColor: '#3d2f6b' }}>
        {/* Barra de progreso con color principal */}
        <div
          className="h-1.5 rounded-full transition-all duration-700"
          style={{
            width: `${percentage}%`,
            background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))',
          }}
        />
      </div>
    </div>
  );
}
