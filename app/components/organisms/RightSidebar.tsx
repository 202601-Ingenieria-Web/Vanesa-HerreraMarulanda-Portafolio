/**
 * RightSidebar — Organismo
 * Menú lateral derecho fijo con iconos de redes sociales.
 */

'use client';

import Image from 'next/image';

interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export default function RightSidebar() {
  const socialLinks: SocialLink[] = [
    {
      label: 'GitHub',
      href: 'https://github.com/vanesaHM',
      icon: '/github.svg',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/vanesaherreram',
      icon: '/linkedin.svg',
    },
  ];

  return (
    <aside
      className="w-16 min-h-screen flex-shrink-0 flex flex-col items-center pt-10 gap-6"
      style={{ backgroundColor: 'var(--color-bg-sidebar)' }}
    >
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          title={link.label}
          className="p-2 rounded-xl transition-all duration-200 hover:scale-110"
          style={{
            color: 'var(--color-text-muted)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-primary-light)';
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#3d2f6b';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-muted)';
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
          }}
        >
          <Image
            src={link.icon}
            alt={link.label}
            width={22}
            height={22}
            style={{ filter: 'currentColor' }}
          />
        </a>
      ))}
    </aside>
  );
}
