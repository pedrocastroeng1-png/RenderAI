import * as React from 'react';
import { motion } from 'motion/react';

interface BeforeAfterViewerProps {
  beforeUrl: string;
  afterUrl: string;
  className?: string;
}

export function BeforeAfterViewer({ beforeUrl, afterUrl, className }: BeforeAfterViewerProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  // For MVP, a simple hover toggle or click toggle.
  // In a full implementation, a draggable slider is better. We will use a simple hold-to-compare logic.

  return (
    <div 
      className={`relative rounded-[20px] overflow-hidden bg-slate-900 border border-white/10 select-none outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer ${className}`}
      role="button"
      tabIndex={0}
      aria-label="Pressione e segure para comparar com a imagem original"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={(e) => { e.preventDefault(); setIsHovered(true); }}
      onTouchEnd={(e) => { e.preventDefault(); setIsHovered(false); }}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          setIsHovered(true);
        }
      }}
      onKeyUp={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          setIsHovered(false);
        }
      }}
    >
      <img 
        src={afterUrl} 
        alt="Imagem Processada" 
        className="w-full h-full object-contain max-h-[60vh]"
      />
      
      <motion.div 
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0"
      >
        <img 
          src={beforeUrl} 
          alt="Imagem Original" 
          className="w-full h-full object-contain"
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white">
          Original
        </div>
      </motion.div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium text-white pointer-events-none">
        Pressione para comparar
      </div>
    </div>
  );
}
