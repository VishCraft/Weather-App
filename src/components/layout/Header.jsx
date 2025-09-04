import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from '../common/Button';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0.75rem 0', marginBottom: '1rem', borderBottom: '1px solid var(--border)'
    }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 700 }}>Weather App</Link>
        <nav style={{ display: 'flex', gap: '0.75rem' }}>
          <NavLink 
            to="/dashboard" 
            style={({ isActive }) => ({ textDecoration: 'none', color: 'inherit', fontWeight: isActive ? 700 : 400 })}
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/settings" 
            style={({ isActive }) => ({ textDecoration: 'none', color: 'inherit', fontWeight: isActive ? 700 : 400 })}
          >
            Settings
          </NavLink>
          <NavLink 
            to="/about" 
            style={({ isActive }) => ({ textDecoration: 'none', color: 'inherit', fontWeight: isActive ? 700 : 400 })}
          >
            About
          </NavLink>
        </nav>
      </div>
      <Button variant="outline" size="sm" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </Button>
    </header>
  );
};
