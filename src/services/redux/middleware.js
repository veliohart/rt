import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import { saga } from './saga';

const logger = createLogger({
  duration: true,
  collapsed: false
});

const middleware = [saga, thunk, logger];

// if (ENV === 'development') middleware.push(logger);

export { middleware };