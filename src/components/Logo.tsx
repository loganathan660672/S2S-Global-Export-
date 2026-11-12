import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'mark' | 'inverted';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
}) => {
  const dimensions = {
    sm: { img: 'w-7 h-7', text: 'text-base', sub: 'text-[9px]' },
    md: { img: 'w-9 h-9', text: 'text-lg', sub: 'text-[10px]' },
    lg: { img: 'w-12 h-12', text: 'text-xl', sub: 'text-xs' },
    xl: { img: 'w-16 h-16', text: 'text-2xl', sub: 'text-sm' },
  }[size];

  if (variant === 'mark') {
    return (
      <div className={`relative shrink-0 rounded-md overflow-hidden ${dimensions.img} ${className}`}>
        <img
          src="/src/assets/images/s2s_global_exim_logo_1794476403636.jpg"
          alt="S2S Global Exim Emblem"
          className="w-full h-full object-cover rounded-md"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 shrink-0 ${className}`}>
      <div className={`relative shrink-0 rounded-md overflow-hidden ${dimensions.img} border border-emerald-900/10 shadow-2xs bg-white`}>
        <img
          src="/src/assets/images/s2s_global_exim_logo_1794476403636.jpg"
          alt="S2S Global Exim Logo Emblem"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`font-bold font-display tracking-tight whitespace-nowrap ${dimensions.text} ${
          variant === 'inverted' ? 'text-white' : 'text-stone-900'
        }`}>
          S2S Global Exim
        </span>
        <span className={`uppercase font-semibold tracking-wider whitespace-nowrap font-sans ${dimensions.sub} ${
          variant === 'inverted' ? 'text-emerald-400' : 'text-emerald-800'
        }`}>
          Merchandise Exporter
        </span>
      </div>
    </div>
  );
};
