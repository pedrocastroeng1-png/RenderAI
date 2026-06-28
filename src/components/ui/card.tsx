import * as React from 'react';
import { cn } from '@/src/lib/cn';
import { motion } from 'motion/react';

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('rounded-[12px] bg-slate-900 border border-white/5 text-slate-100 shadow-soft', className)}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export interface SelectableCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

const SelectableCard = React.forwardRef<HTMLButtonElement, SelectableCardProps>(
  ({ className, selected, ...props }, ref) => (
    <motion.button
      type="button"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      ref={ref}
      aria-pressed={selected}
      className={cn(
        'rounded-[12px] border bg-slate-900 text-slate-100 cursor-pointer transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 w-full text-left',
        selected ? 'border-blue-500 shadow-[0_0_15px_rgba(79,140,255,0.2)]' : 'border-white/5 hover:border-white/20',
        className
      )}
      {...props}
    />
  )
);
SelectableCard.displayName = 'SelectableCard';

export { Card, SelectableCard };
