import { createMuiTheme } from '@material-ui/core/styles';

import * as colors from './colors';

export default createMuiTheme({
  palette: {
    primary: {
      main: colors.primary.hex().toString(),
    },
    secondary: {
      main: colors.secondary.hex().toString(),
    },
  },
});
