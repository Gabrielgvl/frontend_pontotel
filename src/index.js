import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { JwtAuthProvider } from '@gabrielgvl/jwt_auth_react';
import { Provider } from 'react-redux';
import store from 'store';
import StylesProvider from '@material-ui/styles/StylesProvider';
import theme from './styles/muiTheme';
import GlobalStyle from './styles/global';
import { IndexRoutes } from './routes';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <JwtAuthProvider keyPrefix="@Safra-Payback">
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <GlobalStyle />
            <IndexRoutes />
          </MuiThemeProvider>
        </StylesProvider>
      </JwtAuthProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
