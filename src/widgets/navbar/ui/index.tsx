import React from 'react';
import { Link } from 'react-router-dom';
import { SvgSelector } from '../assets/icons/SvgSelector';
import { links } from '../constants/links';
import s from './styles.module.scss';

const Navbar = () => {
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);
  return (
    <nav className={`${s.navbar} ${isActiveMenu && s.navbar__active}`}>
      <div className={s.wrapper}>
        <button
          className={`btn-reset ${s.burger}`}
          onClick={() => setIsActiveMenu(!isActiveMenu)}
        >
          <span className={s.burger__line}></span>
        </button>
        <ul className={`${s.navbar__list} list-reset`}>
          {links.map((link) => (
            <li className={s.navbar__item}>
              <Link className={`link-reset ${s.navbar__icon}`} to={link.url}>
                <SvgSelector id={link.icon} />
              </Link>
              {isActiveMenu && link.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
