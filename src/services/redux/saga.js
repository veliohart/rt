import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import { watchCarsDataRequest } from '../garage/garage.sagas';

export function* rootSaga () {
    yield all([
        call(watchCarsDataRequest)
    ]);
}

export const saga = createSagaMiddleware();