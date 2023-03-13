import React from 'react';
import s from './styles.module.scss';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

const ButtonPrimary = ({ children, onClick }: Props) => {
  return (
    <button className={`btn-reset ${s.button}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
