import React from 'react';

import logo from '../assets/krishiyuktilogo.jpeg';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`h-12 w-12 rounded-full overflow-hidden border-2 border-emerald-700 bg-white shadow-sm flex items-center justify-center shrink-0 ${className}`}>
      <img 
        src={logo}
        alt="KrishiYukti Logo" 
        className="h-full w-full object-cover scale-110" 
      />
    </div>
  );
}
