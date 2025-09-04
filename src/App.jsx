import React from 'react';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Layout } from './components/layout/Layout';
import { AppRouter } from './routes/AppRouter';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <ErrorBoundary>
        <Layout>
          <AppRouter />
        </Layout>
      </ErrorBoundary>
    </div>
  );
}

export default App;
