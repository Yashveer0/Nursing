'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type AnimatedButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

export function AnimatedButton({
  children,
  className,
  onClick,
  type = 'button',
  disabled,
}: AnimatedButtonProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <button type={type} onClick={onClick} className={className} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(className)}
    >
      {children}
    </motion.button>
  );
}
