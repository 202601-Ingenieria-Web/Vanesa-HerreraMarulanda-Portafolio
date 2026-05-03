/**
 * Footer — Organismo
 * Pie de página con información de autor y año.
 * Diseño libre con estilo coherente al portafolio.
 */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="rounded-3xl p-6 text-center mb-6"
      style={{
        background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))',
        color: 'white',
      }}
    >
      <div
        className="text-2xl font-black tracking-tight mb-1"
        style={{ letterSpacing: '-0.03em' }}
      >
        Vanesa Herrera Marulanda
      </div>
      <p className="text-sm font-medium opacity-90">Estudiante de Ingeniería de Sistemas</p>
      <p className="text-sm font-medium opacity-80">Universidad de Antioquia</p>
      <p className="text-xs opacity-60 mt-3">
        © {year} · Medellín, Colombia
      </p>
    </footer>
  );
}
