/**
 * Avatar — Átomo
 * Muestra la foto de perfil.
 */

import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  rounded?: 'full' | 'lg' | 'xl';
  fill?: boolean;
}

const sizeMap = {
  sm: { w: 48, h: 48 },
  md: { w: 80, h: 80 },
  lg: { w: 112, h: 112 },
};

const roundedMap = {
  full: 'rounded-full',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
};

export default function Avatar({
  src,
  alt,
  size = 'md',
  rounded = 'full',
  className = '',
  fill = false,
}: AvatarProps) {
  const dimensions = sizeMap[size];
  const roundedClass = roundedMap[rounded];

  if (fill) {
    return (
      <div
        className={`relative overflow-hidden w-full h-full ${roundedClass} ${className}`}
        style={{
          boxShadow: '0 4px 20px rgba(124, 58, 237, 0.4)',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={dimensions.w}
      height={dimensions.h}
      className={`${roundedClass} object-cover select-none ${className}`}
      style={{
        boxShadow: '0 4px 20px rgba(124, 58, 237, 0.4)',
      }}
      sizes="(max-width: 768px) 80px, 112px"
      priority
    />
  );
}
