import React from 'react';
import { ButtonPrimary } from '../../../../shared/ui';
import s from './styles.module.scss';

type Props = {
  gameName: string;
  imgSrc: string;
};

const BannerCard = ({ gameName, imgSrc }: Props) => {
  return (
    <article className={s.card}>
      <div className={s.card__info}>
        <h3 className={s.card__title}>Play right now a {gameName} online</h3>
        <ButtonPrimary>More Details</ButtonPrimary>
      </div>
      <img className={s.card__background} loading="lazy" src={imgSrc} alt={gameName} />
    </article>
  );
};

export default BannerCard;
