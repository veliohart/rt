import { call, put, takeEvery } from 'redux-saga/effects';
import {
    CARS_DATA_REQUEST,
    CARS_DATA_SUCCESS,
    CARS_DATA_ERROR
} from './garage.actions';
import api from '../api';

function* fetchCarsData() {
    try {
        const data = yield api.get('data/cars.json');
        yield put({type: CARS_DATA_SUCCESS, payload: data})
    }
    catch(err) {
        yield put({type: CARS_DATA_ERROR, payload: err})
    }
}

export function* watchCarsDataRequest() {
    yield takeEvery(CARS_DATA_REQUEST, fetchCarsData);
}