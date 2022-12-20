import { FC } from 'react';

import { IconProps } from '../Icon.types';

const Thunderstorm: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 50 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M41.7437 31.315L39.1449 31.8629C39.1449 31.8629 38.7972 31.9292 38.9887 31.6246C39.5139 30.7894 41.1417 28.316 41.1417 28.316C41.4044 27.9125 41.2848 27.3758 40.8747 27.1175C40.4646 26.8591 39.9193 26.9767 39.6565 27.3802L36.4123 32.3656C36.1482 32.7712 36.1384 33.2232 36.386 33.5746C36.6337 33.9261 37.0672 34.0757 37.5458 33.9747C37.5458 33.9747 39.7948 33.4973 40.5454 33.3423C40.7127 33.3077 40.6404 33.5274 40.6404 33.5274L38.5678 37.5219C38.3463 37.9487 38.5184 38.4714 38.9522 38.6892C39.0806 38.7538 39.2175 38.7843 39.3525 38.7843C39.6732 38.7843 39.9827 38.6115 40.1385 38.311L42.96 32.873C43.1738 32.4608 43.1476 32.0176 42.8898 31.6874C42.632 31.3574 42.2033 31.2181 41.7437 31.315Z"
      fill="white"
    />
    <path
      d="M26.9187 35.5307L23.995 36.0787C23.995 36.0787 23.6038 36.1449 23.8193 35.8404C24.41 35.0051 26.2414 32.5318 26.2414 32.5318C26.5369 32.1282 26.4024 31.5916 25.941 31.3332C25.4796 31.0747 24.8662 31.1924 24.5705 31.596L20.9208 36.5813C20.6237 36.9869 20.6128 37.4389 20.8913 37.7904C21.1699 38.1417 21.6576 38.2913 22.196 38.1904C22.196 38.1904 24.7261 37.7131 25.5705 37.5581C25.7587 37.5235 25.6774 37.7432 25.6774 37.7432L23.3457 41.7376C23.0965 42.1644 23.2902 42.6871 23.7782 42.9049C23.9227 42.9693 24.0766 43 24.2285 43C24.5895 43 24.9375 42.827 25.1129 42.5267L28.2871 37.0887C28.5275 36.6765 28.498 36.2334 28.2081 35.9032C27.918 35.573 27.4358 35.4337 26.9187 35.5307Z"
      fill="white"
    />
    <path
      d="M45.556 11.434C45.6576 10.8824 45.7262 10.3308 45.7262 9.78032C45.7262 5.1607 41.8713 1.40238 37.133 1.40238C33.4852 1.40238 30.2897 3.60072 29.0577 6.91364C29.0241 7.00409 28.8736 7.17401 28.7548 7.17401C28.3679 7.17401 27.868 7.20753 27.4957 7.27176C27.381 7.29151 27.2088 7.30809 27.1859 7.12098C27.0882 5.45629 26.3582 3.68397 25.0777 2.33925C23.662 0.85264 21.6728 0 19.6199 0C16.5473 0 13.5771 1.68895 12.6809 4.50114C12.56 4.88035 12.3792 4.96323 12.3129 4.96323C10.017 4.96323 7.94932 6.28882 6.96513 8.32687C6.91161 8.43755 6.77759 8.66926 6.4684 8.62173C6.27724 8.59247 6.08208 8.59381 5.88866 8.59381C2.64165 8.59381 0 11.1693 0 14.3351C0 17.5009 2.64165 20.0764 5.88866 20.0764H10.3674H14.8462C15.7607 22.6208 18.2472 24.451 21.1653 24.451H43.3048C46.9965 24.451 50 21.5227 50 17.9235C50 15.2562 48.3074 12.8552 45.8092 11.8702C45.7023 11.8282 45.504 11.7166 45.556 11.434ZM5.88854 18.2481C3.6756 18.2481 1.87525 16.4928 1.87525 14.3352C1.87525 12.1777 3.6756 10.4223 5.88854 10.4223C6.16022 10.4223 6.43227 10.4493 6.69682 10.5024C7.51123 10.6665 8.2235 10.2935 8.46917 9.57481C9.03803 7.91012 10.5827 6.79175 12.3129 6.79175C12.3706 6.79175 12.4277 6.79626 12.4847 6.79992C12.575 6.80589 12.6648 6.81125 12.7546 6.81211C13.2266 6.81479 14.0468 6.67485 14.2347 5.68435L14.2372 5.67143C14.9825 3.3718 17.1424 1.82852 19.6199 1.82852C21.1531 1.82852 22.6413 2.46821 23.7034 3.58341C24.7426 4.67471 25.2947 6.13072 25.2862 7.7246C25.2856 7.84052 25.3231 8.01933 25.0851 8.18864C24.1599 8.70376 23.0688 9.85553 22.4619 11.2049C22.4186 11.3014 22.2809 11.4527 21.9452 11.4409C21.6849 11.4316 21.4259 11.3964 21.1656 11.3964C17.474 11.3964 14.4705 14.3246 14.4705 17.9239C14.4705 18.0327 14.4735 18.1408 14.4789 18.2483L5.88854 18.2481ZM43.3048 22.6227H21.1653C18.5078 22.6227 16.3456 20.5147 16.3456 17.9236C16.3456 15.3325 18.5078 13.2245 21.1653 13.2245C21.4914 13.2245 21.8182 13.2569 22.1365 13.3208C22.271 13.3479 22.4065 13.3615 22.5393 13.3615C23.2383 13.3615 23.8063 12.9704 24.0215 12.3407C24.7039 10.344 26.5582 9.0024 28.6362 9.0024C28.696 9.0024 28.7688 9.00715 28.8458 9.01227C28.937 9.01837 29.0402 9.02507 29.151 9.02604L29.1748 9.02617C29.6679 9.02617 30.5244 8.87161 30.7207 7.83662L30.7254 7.81199C31.6099 5.07099 34.1822 3.23077 37.1331 3.23077C40.8373 3.23077 43.8509 6.16888 43.8509 9.78032C43.8509 10.4001 43.7576 11.0279 43.5737 11.646C43.4232 12.1516 43.5414 12.5201 43.6671 12.7404C43.9399 13.2181 44.4327 13.3521 44.6182 13.4026L44.6432 13.4094C46.6932 13.9856 48.1249 15.8419 48.1249 17.9236C48.1246 20.5147 45.9625 22.6227 43.3048 22.6227Z"
      fill="white"
    />
    <path
      d="M11.5709 27.409L8.97204 27.996C8.97204 27.996 8.62426 28.067 8.81579 27.7407C9.34099 26.8458 10.9688 24.1957 10.9688 24.1957C11.2315 23.7634 11.1119 23.1884 10.7018 22.9116C10.2917 22.6347 9.74638 22.7608 9.48361 23.1931L6.23941 28.5346C5.97534 28.9691 5.96558 29.4534 6.21319 29.83C6.4608 30.2065 6.89429 30.3668 7.37293 30.2586C7.37293 30.2586 9.62199 29.7472 10.3725 29.5811C10.5398 29.544 10.4675 29.7794 10.4675 29.7794L8.39488 34.0592C8.17337 34.5165 8.3455 35.0765 8.77934 35.3099C8.90773 35.379 9.04459 35.4118 9.17956 35.4118C9.50042 35.4118 9.80975 35.2266 9.96566 34.9047L12.7872 29.0782C13.0009 28.6366 12.9747 28.1617 12.717 27.808C12.4591 27.4542 12.0306 27.3051 11.5709 27.409Z"
      fill="white"
    />
  </svg>
);

export default Thunderstorm;
