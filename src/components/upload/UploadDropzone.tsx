import * as React from 'react';
import { motion } from 'motion/react';
import { ImagePlus, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/cn';

interface UploadDropzoneProps {
  onFileSelect: (file: File) => void;
  className?: string;
}

export function UploadDropzone({ onFileSelect, className }: UploadDropzoneProps) {
  const [isDragging, setIsDragging] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFiles(files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFiles(files[0]);
    }
  };

  const handleFiles = (file: File) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/heic'];
    if (validTypes.includes(file.type)) {
      onFileSelect(file);
    } else {
      alert('Formato não suportado. Envie PNG, JPG, WEBP ou HEIC.');
    }
  };

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 0.995 }}
      whileTap={{ scale: 0.99 }}
      onClick={() => fileInputRef.current?.click()}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        'relative flex flex-col items-center justify-center p-10 md:p-14 text-center rounded-[24px] cursor-pointer transition-all duration-500 w-full outline-none focus-visible:ring-2 focus-visible:ring-blue-500 overflow-hidden group',
        isDragging 
          ? 'bg-[#2F8CFF]/10 shadow-[0_0_40px_rgba(47,140,255,0.2)] border border-[#2F8CFF]/50 scale-[1.02]' 
          : 'bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] shadow-2xl',
        className
      )}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/jpeg, image/png, image/webp, image/heic"
        onChange={handleChange}
        tabIndex={-1}
      />
      
      {/* Background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2F8CFF]/0 to-[#6A4CFF]/0 group-hover:to-[#6A4CFF]/5 transition-all duration-500" />
      
      <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 mb-5 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <ImagePlus className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
      </div>
      
      <h3 className="relative z-10 text-lg font-medium text-slate-200 mb-2 group-hover:text-white transition-colors">
        Envie sua imagem
      </h3>
      <p className="relative z-10 text-slate-400 text-sm max-w-sm">
        Arraste para cá ou clique para procurar.
      </p>
      
      <div className="relative z-10 flex items-center gap-2 mt-6 text-xs text-slate-500 font-medium tracking-wide">
        <Sparkles className="w-3.5 h-3.5 text-[#2F8CFF]" />
        <span>PNG, JPG, WEBP e HEIC</span>
      </div>
    </motion.button>
  );
}
