import React from 'react';
import logoImg from './asset/logo.jpg';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`h-12 w-12 rounded-full overflow-hidden border-2 border-emerald-700 bg-white shadow-sm flex items-center justify-center shrink-0 ${className}`}>
      <img 
        src={logoImg} 
        alt="KrishiYukti Logo" 
        className="h-full w-full object-cover scale-110" 
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"; }}
      />
    </div>
  );
}
