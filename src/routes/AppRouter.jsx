import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spinner } from '../components/common/Spinner';

const Home = React.lazy(() => import('../pages/Home/Home'));
const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard'));
const Settings = React.lazy(() => import('../pages/Settings/Settings'));
const About = React.lazy(() => import('../pages/About/About'));
const NotFound = React.lazy(() => import('../pages/NotFound/NotFound'));

export const AppRouter = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
