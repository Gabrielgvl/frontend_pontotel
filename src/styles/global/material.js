import { css } from 'styled-components';
import * as colors from '../colors';

export default css`
  .chips {
    margin-top: 5px;
  }

  .chips-item {
    font-size: 10px !important;
    margin-right: 3px;
    height: 26px !important;
  }

  .tooltips {
    font-size: 14px !important;
  }

  .bg-primary {
    background-color: ${colors.primary.rgb().toString()} !important;
    color: #fff !important;
  }

  .bg-error {
    background-color: ${colors.muiColors.red} !important;
    color: #fff !important;
  }

  .bg-success {
    background-color: ${colors.muiColors.green} !important;
    color: #fff !important;
  }

  .bg-pink {
    background-color: ${colors.muiColors.pink} !important;
    color: #fff !important;
  }

  .bg-purple {
    background-color: ${colors.muiColors.purple} !important;
    color: #fff !important;
  }

  .bg-indigo {
    background-color: ${colors.muiColors.indigo} !important;
    color: #fff !important;
  }

  .bg-blue {
    background-color: ${colors.muiColors.blue} !important;
    color: #fff !important;
  }

  .bg-black {
    color: #fff !important;
    background: black !important;
  }
`;
