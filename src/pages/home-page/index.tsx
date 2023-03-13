import React from 'react';
import { BannerCard } from '../../entities/banner';
import { InputSearch } from '../../shared/ui';
import s from './styles.module.scss';

const HomePage = () => {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div className={s.home}>
      <InputSearch placeholder="Найти игру" text={searchValue} setText={setSearchValue} />
      <ul className={`list-reset ${s.home__banners}`}>
        <li>
          <BannerCard gameName="Sea battle" imgSrc="/banner.png" />
        </li>
        <li>
          <BannerCard gameName="Chessmate" imgSrc="/banner.png" />
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
