/**
 * layout.tsx — Layout raíz de Next.js (App Router)
 * Define la estructura HTML base, metadatos y estilos globales.
 */

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portafolio | Vanesa Herrera Marulanda',
  description: 'Este es mi portafolio personal como estudiante de Ingeniería de Sistemas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ backgroundColor: 'var(--color-bg-main)', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
