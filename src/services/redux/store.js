import { createStore, applyMiddleware } from 'redux';
import { reducer } from './rootReducer';
import { middleware } from "./middleware";
import { saga, rootSaga } from './saga';

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const store = createStoreWithMiddleware(
	reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

saga.run(rootSaga);

export { store };
