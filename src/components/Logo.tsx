import React from 'react';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`h-10 w-10 rounded-full overflow-hidden flex items-center justify-center shrink-0 bg-white ${className}`}>
      <img 
        src="/klogo.jpeg" 
        alt="KrishiYukti Logo" 
        className="h-full w-full object-contain" 
      />
    </div>
  );
}
