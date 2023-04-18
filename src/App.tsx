import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Home } from 'pages';
import { Path } from 'types';

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path={Path.HOME} element={<Home />} />),
);
