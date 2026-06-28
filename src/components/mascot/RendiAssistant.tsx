import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/cn';

type RendiState = 'idle' | 'processing' | 'success' | 'error';

interface RendiAssistantProps {
  state: RendiState;
  message?: string;
  className?: string;
}

export function RendiAssistant({ state, message, className }: RendiAssistantProps) {
  // In a real implementation we would swap images or trigger a 3D model animation.
  // Here we use CSS representations and text bubbles.
  
  return (
    <div className={cn('flex flex-col items-center justify-center gap-4', className)}>
      <motion.div
        className="relative w-32 h-32 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border-2 border-slate-700 shadow-[0_0_20px_rgba(106,76,255,0.15)]"
        animate={{
          y: state === 'idle' ? [0, -5, 0] : 0,
          scale: state === 'success' ? [1, 1.05, 1] : 1,
          boxShadow: state === 'processing' ? '0 0 30px rgba(79,140,255,0.4)' : '0 0 20px rgba(106,76,255,0.15)'
        }}
        transition={{
          repeat: state === 'idle' ? Infinity : 0,
          duration: 3,
          ease: 'easeInOut'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-violet-600/20" />
        <span className="text-4xl relative z-10" role="img" aria-label="Rendi">
          {state === 'idle' && '🧑‍🔬'}
          {state === 'processing' && '📸'}
          {state === 'success' && '✨'}
          {state === 'error' && '🔧'}
        </span>
      </motion.div>

      <AnimatePresence mode="wait">
        {message && (
          <motion.div
            key={message}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="max-w-xs text-center px-4 py-3 bg-slate-800/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg"
          >
            <p className="text-sm font-medium text-slate-200">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
