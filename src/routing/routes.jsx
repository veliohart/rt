import Layout from '../containers/layout';
import HomePage from '../pages/home/home.component';
import RootPage from '../pages/root/root.component';
import GaragePage from '../pages/garage/garage.compomponent';
import CarPage from '../pages/garage/car.component';

import {
  Header, 
  Footer 
} from '../components/shared';

const root = {
  url: '/',
  name: 'root',
  component: Layout,
  redirectTo: 'layout'
};
const layout = {
  url: '',
  name: 'layout',
  parent: 'root',
  views: {
    header: Header,
    '': RootPage,
    footer: Footer
  }
};
const home = {
  url: 'home',
  name: 'home',
  parent: 'root',
  views: {
    header: Header,
    '': HomePage,
    footer: Footer
  }
};
const garage = {
  url: 'garage',
  name: 'garage',
  parent: 'root',
  views: {
    header: Header,
    '': GaragePage,
    footer: Footer
  }
};
const car = {
  name: 'car',
  url: '/car/:id',
  parent: 'garage',
  views: { '': CarPage }
};

const Routes = [
  root,
  layout,
  home,
  garage,
  car
];

export default Routes;