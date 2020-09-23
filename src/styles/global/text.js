import { css } from 'styled-components';

import { desktopHd } from '../queries';

export default css`
  .page-subtitle {
    margin-bottom: 8px;
  }

  h2.section-title {
    font-weight: 300;
  }

  .p-page-title {
    padding: 0 15px;
  }
  .p-page-subtitle {
    padding: 0 15px;
  }

  .section {
    padding: 0 18px;
  }

  .text-center {
    text-align: center;
  }

  .text-end {
    text-align: end;
  }

  /* Font Sizes */
  .f-24 {
    font-size: 24px;
  }
  .f-22 {
    font-size: 22px;
  }
  .f-20 {
    font-size: 20px;
  }
  .f-18 {
    font-size: 18px;
  }

  /* Font Weigth */
  .text-regular {
    font-weight: 400;
  }

  /* Font size => regular */
  .f-26-r {
    font-size: 16px;

    ${desktopHd} {
      font-size: 26px;
    }
  }
  .f-24-r {
    font-size: 16px;

    ${desktopHd} {
      font-size: 24px;
    }
  }
  .f-22-r {
    font-size: 16px;

    ${desktopHd} {
      font-size: 22px;
    }
  }
  .f-20-r {
    font-size: 16px;

    ${desktopHd} {
      font-size: 20px;
    }
  }
`;
