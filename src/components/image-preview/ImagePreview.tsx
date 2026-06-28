import * as React from 'react';
import { motion } from 'motion/react';
import { RefreshCcw } from 'lucide-react';
import { Button } from '../ui/button';

interface ImagePreviewProps {
  url: string;
  onReset?: () => void;
  className?: string;
}

export function ImagePreview({ url, onReset, className }: ImagePreviewProps) {
  return (
    <div className={`relative rounded-[20px] overflow-hidden group border border-white/10 bg-slate-900 ${className}`}>
      <motion.img 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        src={url} 
        alt="Preview da Imagem" 
        className="w-full h-full object-contain max-h-[60vh]"
      />
      
      {onReset && (
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="icon" onClick={onReset} aria-label="Trocar Imagem">
            <RefreshCcw className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
