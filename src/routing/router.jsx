import React from 'react';
import {UIRouter, UIView, pushStateLocationPlugin} from '@uirouter/react';

import Routes from './routes';

class Router extends React.Component {
  render () {
    return (
      <UIRouter plugins={[pushStateLocationPlugin]} states={Routes}>
        <UIView/>
      </UIRouter>
    );
  }
}

export default Router;