import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { JwtAuthProvider } from '@gabrielgvl/jwt_auth_react';
import { Provider } from 'react-redux';
import store from 'store';
import StylesProvider from '@material-ui/styles/StylesProvider';
import { SnackbarProvider } from 'notistack';
import theme from './styles/muiTheme';
import GlobalStyle from './styles/global';
import { IndexRoutes } from './routes';
import GlobalProvider from './hooks/useGlobalState';
import SnackbarActions from './components/Snackbar';

ReactDOM.render(
  <BrowserRouter>
    <SnackbarProvider
      maxSnack={5}
      preventDuplicate
      action={(key) => <SnackbarActions id={key} />}
    >
      <Provider store={store}>
        <JwtAuthProvider keyPrefix="@Safra-Payback">
          <GlobalProvider>
            <StylesProvider injectFirst>
              <MuiThemeProvider theme={theme}>
                <GlobalStyle />
                <IndexRoutes />
              </MuiThemeProvider>
            </StylesProvider>
          </GlobalProvider>
        </JwtAuthProvider>
      </Provider>
    </SnackbarProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
