/**
 * Badge — Átomo
 * Etiqueta pequeña decorativa (usada en habilidades extra, tecnologías, etc.).
 */

interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span
      className="inline-block text-xs font-medium px-3 py-1 rounded-full mr-2 mb-2"
      style={{
        backgroundColor: 'var(--color-accent)',
        color: 'var(--color-primary-dark)',
      }}
    >
      {text}
    </span>
  );
}
