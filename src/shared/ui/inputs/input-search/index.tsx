import React from 'react';
import InputSvgSelector from '../InputSvgSelector';
import s from './styles.module.scss';

type Props = {
  text?: string;
  placeholder?: string;
  setText?: (arg: string) => void;
};

const InputSearch = ({ text, setText, placeholder }: Props) => {
  return (
    <div className={s.search}>
      <InputSvgSelector id="input-search-icon" />
      <input
        type="search"
        placeholder={placeholder}
        value={text}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setText && setText(e.currentTarget.value)
        }
        className={`input-reset`}
      />
    </div>
  );
};

export default InputSearch;
