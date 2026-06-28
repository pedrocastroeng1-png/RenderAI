import * as React from 'react';
import { cn } from '@/src/lib/cn';
import { motion, HTMLMotionProps } from 'motion/react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'icon';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', isLoading, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-blue-600 text-white hover:bg-blue-700 shadow-soft': variant === 'primary',
            'bg-slate-800 text-slate-100 hover:bg-slate-700': variant === 'secondary',
            'hover:bg-slate-800/50 text-slate-300': variant === 'ghost',
            'bg-red-500/10 text-red-500 hover:bg-red-500/20': variant === 'danger',
            'bg-transparent p-0': variant === 'icon',
            'h-10 px-4 py-2': size === 'default' && variant !== 'icon',
            'h-9 rounded-md px-3': size === 'sm',
            'h-11 rounded-md px-8': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          className
        )}
        disabled={isLoading || props.disabled}
        {...(props as any)}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </motion.button>
    );
  }
);
Button.displayName = 'Button';
