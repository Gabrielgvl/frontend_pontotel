import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { RouteWithSubRoutes } from './RoutesWithSubRoutes';
import routes from './routes';
import loginRoutes from './loginRoutes';
import Loading from '../components/Loading';
import indexRoutes from './indexRoutes';

/**
 * Router para renderizar páginas dentro do painel
 */
export const Routes = (
  <Suspense fallback={<Loading />}>
    <Switch>
      {routes.map((route, index) => (
        <RouteWithSubRoutes key={index.toString()} {...route} />
      ))}
      <Redirect from="*" to="/404" />
    </Switch>
  </Suspense>
);

/**
 * Router para renderizar as rotas de login/cadastro
 */
export const LoginRoutes = () => (
  <Switch>
    {loginRoutes.map((route, index) => (
      <RouteWithSubRoutes key={index.toString()} {...route} />
    ))}
    <Redirect from="*" to="/404" />
  </Switch>
);

/**
 * Router para renderizar rotas principais (Painel, Login, Cadastro)
 */
export const IndexRoutes = () => (
  <Switch>
    {indexRoutes.map((route, key) => {
      if (route.redirect) {
        return (
          <Redirect to={route.to} from={route.from} key={key.toString()} />
        );
      }
      return (
        <Route
          path={route.path}
          component={route.component}
          {...route}
          key={key.toString()}
        />
      );
    })}
  </Switch>
);

export default Routes;
