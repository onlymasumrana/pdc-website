import React from 'react';

// Simple utility function to combine class names
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

interface DotGridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  dotSize?: number;
  dotColor?: string;
  backgroundColor?: string;
  spacing?: number;
  maskGradient?: boolean;
}

export function DotGridBackground({
  children,
  className,
  dotSize = 1,
  dotColor = '#e5e7eb',
  backgroundColor = 'white',
  spacing = 16,
  maskGradient = false,
}: DotGridBackgroundProps) {
  const backgroundStyle = {
    backgroundColor,
    backgroundImage: `radial-gradient(${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
    backgroundSize: `${spacing}px ${spacing}px`,
    ...(maskGradient && {
      maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 60%, transparent 100%)',
      WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 60%, transparent 100%)',
    }),
  };

  return (
    <div className={cn('relative', className)}>
      <div
        className="absolute inset-0 h-full w-full"
        style={backgroundStyle}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
