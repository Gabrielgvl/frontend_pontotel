import Color from 'color';

import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import greenMui from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';

export const primary = Color('#006ba1');
export const secondary = Color('#a13600');
export const primaryLight = Color('#007cba');
export const primaryDark = Color('#005a87');

export const darkText = Color('#323131');
export const darkText80 = darkText.fade(0.2);
export const darkText50 = darkText.fade(0.5);
export const darkText10 = darkText.fade(0.9);

export const green = Color('#6FCF97');

// mui colors
export const muiColors = {
  red: red[500],
  purple: purple[500],
  pink: pink[500],
  indigo: indigo[500],
  blue: blue[500],
  green: greenMui[600],
  yellow: yellow[700],
  customRed: (hue) => red[hue],
};

export const pastelColor = (hex, lastHex, auxHex) => {
  const hBase = hex * lastHex * 0.001;
  const newH = Math.floor(hBase * 360);
  const newL = Math.floor((auxHex / hex) * 0.1 * 22) + 75;

  return Color(`hsl(${newH}, 100%, ${newL}%)`);
};
