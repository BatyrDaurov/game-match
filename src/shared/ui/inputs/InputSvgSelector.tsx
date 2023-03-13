import React from 'react';

type Props = {
  id: string;
};

const InputSvgSelector = ({ id }: Props) => {
  switch (id) {
    case 'input-search-icon':
      return (
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.375 21.375C17.3456 21.375 21.375 17.3456 21.375 12.375C21.375 7.40444 17.3456 3.375 12.375 3.375C7.40444 3.375 3.375 7.40444 3.375 12.375C3.375 17.3456 7.40444 21.375 12.375 21.375Z"
            stroke="#464950"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23.625 23.625L18.7312 18.7312"
            stroke="#464950"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
      break;
    default:
      return <div>No Icons</div>;
      break;
  }
};

export default InputSvgSelector;
