import { createGlobalStyle, css } from 'styled-components';

import * as colors from '../colors';

import material from './material';
import responsive from './responsive';
import position from './position';
import text from './text';

const fontColors = css`
  .muted {
    color: ${colors.darkText50.rgb().toString()} !important;
  }

  .text-dark {
    color: ${colors.darkText.rgb().toString()};
  }

  .text-white {
    color: #fff !important;
  }
`;

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    html, body, #root {
        height: 100%;
        background: rgb(245, 245, 245);
        -webkit-tap-highlight-color: transparent;
        color: ${colors.darkText.rgb().toString()};
    }

    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }

    a {
      color: ${colors.darkText.rgb().toString()};
      text-decoration: none;
    }

    .leaflet-container {
      height: 400px;
      width: 100%;
    }

    .underline-hover {
      &:hover{
        text-decoration: underline;
      }
    }

    h1.page-title {
        font-weight: 300;
        margin-bottom: 8px;
    }

    h2.page-alert {
        font-size: 22px;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${colors.green.rgb().toString()};
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    ${material}
    ${responsive}
    ${fontColors}
    ${position}
    ${text}

    .streched-link {
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        pointer-events: auto;
        content: "";
        background-color: rgba(0,0,0,0);
      }
    }


    .StripeElement {
      display: block;
      margin: 10px 0 20px 0;
      padding: 20px 14px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: white;
      cursor: text;
    }

    .default-color {
      color: ${colors.darkText80.rgb().toString()} !important;
    }
`;
