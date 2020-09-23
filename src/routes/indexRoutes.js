import * as pathNames from './pathNames';
import App from '../App';
import NotFound from '../components/NotFound';

/**
 * Array de rotas Principais
 */
const indexRoutes = [
  {
    redirect: true,
    from: pathNames.LOGIN,
    to: pathNames.APP,
  },
  {
    path: pathNames.NOTFOUND,
    component: NotFound,
    exact: true,
  },
  {
    path: pathNames.APP,
    component: App,
  },
];

export default indexRoutes;
