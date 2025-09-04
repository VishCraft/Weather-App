import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '1rem' }}>
      <Header />
      {children}
  <Footer />
    </div>
  );
};
