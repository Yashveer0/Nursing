'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedCard({ children, className }: AnimatedCardProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}
