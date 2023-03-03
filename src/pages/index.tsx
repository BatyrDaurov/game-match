import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('./home-page'));

export const Routing = () => (
  <>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </>
);
