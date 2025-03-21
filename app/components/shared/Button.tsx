'use client';

import { ButtonProps } from '@/app/types';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const buttonStyles = {
  base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  variant: {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
  },
  size: {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  },
  disabled: 'opacity-50 cursor-not-allowed',
};

export default function Button({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  href,
  className,
  type = 'button',
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = twMerge(
    buttonStyles.base,
    buttonStyles.variant[variant],
    buttonStyles.size[size],
    props.disabled && buttonStyles.disabled,
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
} 