import React from 'react';

interface TechCatalystLogoProps {
  className?: string;
  markOnly?: boolean;
  variant?: 'royal' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const TechCatalystMark: React.FC<{
  className?: string;
  variant?: 'royal' | 'white' | 'dark';
}> = ({ className = 'h-8 w-auto', variant = 'royal' }) => {
  return (
    <img
      src="/logo.png"
      alt="TechCatalyst Mark"
      className={`shrink-0 aspect-[3/5] object-contain ${
        variant === 'white' ? 'brightness-0 invert' : ''
      } ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};

export const TechCatalystLogo: React.FC<TechCatalystLogoProps> = ({
  className = '',
  markOnly = false,
  variant = 'royal',
  size = 'md',
}) => {
  const textColor =
    variant === 'white'
      ? 'text-white'
      : 'text-[#0F172A]';

  const sizeClasses = {
    sm: {
      mark: 'h-6 w-auto',
      text: 'text-lg',
      gap: 'gap-2',
    },
    md: {
      mark: 'h-8 w-auto',
      text: 'text-2xl',
      gap: 'gap-2.5',
    },
    lg: {
      mark: 'h-10 w-auto',
      text: 'text-3xl',
      gap: 'gap-3',
    },
    xl: {
      mark: 'h-12 w-auto',
      text: 'text-4xl',
      gap: 'gap-3.5',
    },
  }[size];

  if (markOnly) {
    return (
      <TechCatalystMark
        className={`${sizeClasses.mark} ${className}`}
        variant={variant}
      />
    );
  }

  return (
    <div className={`inline-flex items-center ${sizeClasses.gap} ${className}`}>
      <TechCatalystMark className={sizeClasses.mark} variant={variant} />
      <span
        className={`font-extrabold tracking-[-0.03em] leading-none ${sizeClasses.text} ${textColor}`}
        style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}
      >
        TechCatalyst
      </span>
    </div>
  );
};

export default TechCatalystLogo;
