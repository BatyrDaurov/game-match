import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Navbar } from '../widgets';

const HomePage = lazy(() => import('./home-page'));

export const Routing = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/games" element={<h1 style={{ margin: '0 10rem' }}>Games...</h1>} />
      <Route
        path="/champions"
        element={<h1 style={{ margin: '0 10rem' }}>Champions...</h1>}
      />
      <Route
        path="/settings"
        element={<h1 style={{ margin: '0 10rem' }}>Settings...</h1>}
      />
    </Routes>
  </>
);
