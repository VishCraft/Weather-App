import React from 'react';

export const Footer = () => {
  return (
    <footer style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border)', color: 'var(--text-secondary)', fontSize: '.875rem' }}>
      <span>© {new Date().getFullYear()} Weather App</span>
    </footer>
  );
};
