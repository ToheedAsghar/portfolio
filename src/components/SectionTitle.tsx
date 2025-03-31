
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]}`}>
      <h2 className="heading-lg text-white mb-3">
        {title}
        <span className="text-glow-blue">.</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1.5 w-20 bg-gradient-to-r from-glow-blue to-glow-purple mt-4 rounded-full ${
        align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
      }`}></div>
    </div>
  );
};

export default SectionTitle;
