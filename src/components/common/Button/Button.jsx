import React from 'react';
import styles from './Button.module.css';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  loading = false,
  ...props 
}) => {
  const classes = [
    styles['btn'],
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    disabled && styles['btn--disabled'],
    loading && styles['btn--loading'],
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
  {loading ? <span className={styles['spinner']} /> : children}
    </button>
  );
};
