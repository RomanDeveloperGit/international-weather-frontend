import Main from '../pages/Main/Main';
import NotFound from '../pages/NotFound/NotFound';

enum RoutePath {
  Main = '/',
  Other = '*',
}

interface Route {
  path: RoutePath;
  element: JSX.Element;
}

const ROUTES: Route[] = [
  {
    path: RoutePath.Main,
    element: <Main />,
  },
  {
    path: RoutePath.Other,
    element: <NotFound />,
  },
];

export default ROUTES;
