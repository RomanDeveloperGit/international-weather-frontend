import { FC } from 'react';

import { IconProps } from '../Icon.types';

const Rain: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#a)">
      <path
        d="M14.033 40.584a1.686 1.686 0 0 1 1.067 2.137l-1.688 5.062a1.687 1.687 0 0 1-3.2-1.066l1.688-5.063a1.687 1.687 0 0 1 2.133-1.07zm10.125 0a1.686 1.686 0 0 1 1.067 2.137L21.85 52.846a1.687 1.687 0 0 1-3.2-1.067l3.375-10.125a1.687 1.687 0 0 1 2.133-1.07zm10.125 0a1.686 1.686 0 0 1 1.067 2.137l-1.688 5.062a1.687 1.687 0 0 1-3.2-1.066l1.688-5.063a1.687 1.687 0 0 1 2.133-1.07zm10.125 0a1.686 1.686 0 0 1 1.067 2.137L42.1 52.846a1.686 1.686 0 1 1-3.2-1.067l3.375-10.125a1.687 1.687 0 0 1 2.133-1.07zm.834-23.618a16.878 16.878 0 0 0-32.06-3.388A11.815 11.815 0 0 0 .04 24.626a11.812 11.812 0 0 0 11.774 12.499h32.062a10.125 10.125 0 0 0 1.367-20.159zM28.688 6.75a13.5 13.5 0 0 1 13.419 11.998 1.687 1.687 0 0 0 1.687 1.502h.081a6.75 6.75 0 0 1 0 13.5H11.813a8.438 8.438 0 1 1 2.041-16.625 1.688 1.688 0 0 0 2.012-1.11A13.507 13.507 0 0 1 28.688 6.75z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h54v54H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Rain;
