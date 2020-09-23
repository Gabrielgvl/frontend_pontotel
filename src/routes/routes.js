// @material-ui/icons
import * as pathNames from './pathNames';
import HomePage from '../pages/HomePage';

const routes = [
  {
    path: pathNames.HOMEPAGE,
    component: HomePage,
    exact: true,
  },
];

export default routes;
