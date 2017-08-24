import React from 'react';
import Router from "./routing/router";
import { Provider } from 'react-redux';

import { store } from './services/redux/store';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
    	<Provider store={store}>
      	<Router/>
    	</Provider>
    );
  }
}

export default App;
