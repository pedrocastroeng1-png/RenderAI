import * as React from 'react';
import { cn } from '@/src/lib/cn';

interface PromptBoxProps {
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export function PromptBox({ value, onChange, className }: PromptBoxProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <label htmlFor="user-prompt" className="block text-sm font-medium text-slate-300">
        Ou descreva livremente (opcional)
      </label>
      <textarea
        id="user-prompt"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ex: Quero deixar essa foto profissional, com fundo limpo."
        className="w-full h-24 p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none transition-all"
      />
    </div>
  );
}
