/**
 * ContactItem — Molécula
 * Muestra un dato de contacto con icono y texto.
 * Usado en la sección "Datos de contacto" del menú lateral izquierdo.
 */

import { ReactNode } from 'react';

interface ContactItemProps {
  icon: ReactNode;
  text: string;
  href?: string; 
}

export default function ContactItem({ icon, text, href }: ContactItemProps) {
  const content = (
    <div
      className="flex items-center gap-2 text-sm py-1"
      style={{ color: 'var(--color-text-light)' }}
    >
      {/* Icono con color de acento */}
      <span style={{ color: 'var(--color-primary-light)' }}>{icon}</span>
      <span className="break-all">{text}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        {content}
      </a>
    );
  }

  return content;
}
