import React from 'react';
import { Navbar } from '../../widgets';
import s from './styles.module.scss';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className={s.home}>Home</div>
    </>
  );
};

export default HomePage;
