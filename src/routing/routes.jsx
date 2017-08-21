import React from 'react';
import Layout from '../containers/layout';
import HomePage from '../pages/home/home.component';
import RootPage from '../pages/root/root.component';
import GaragePage from '../pages/garage/garage.compomponent';

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
const sub1 = {
  url: 'sub1',
  name: 'sub1',
  parent: 'root',
  views: {
    header: Header,
    '': () => (<div>qq1</div>),
    footer: Footer
  },
  onEnter: (transition, state) => console.log('transition', transition, 'state', state)
};
const sub2 = {
  url: '/sub2',
  name: 'sub2',
  parent: 'sub1',
  views: {
    header: Header,
    '': () => (<div>qq2</div>),
    footer: Footer
  },
  onEnter: (transition, state) => console.log('transition', transition, 'state', state)
};
const sub3 = {
  url: '/sub3',
  name: 'sub3',
  parent: 'sub2',
  views: {
    header: Header,
    '': () => (<div>qq3</div>),
    footer: Footer
  },
  onEnter: (transition, state) => console.log('transition', transition, 'state', state)
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

const Routes = [
  root,
  layout,
  home,
  garage
];

export default Routes;