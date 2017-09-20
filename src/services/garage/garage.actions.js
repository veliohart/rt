import api from '../api'

export const CARS_DATA_REQUEST = 'CARS_DATA_REQUEST';
export const CARS_DATA_SUCCESS = 'CARS_DATA_SUCCESS';
export const CARS_DATA_ERROR = 'CARS_DATA_ERROR';

export const carsDataRequest = () => ({
  type: CARS_DATA_REQUEST
});
const carsDataSuccess = (data) => ({
  type: CARS_DATA_SUCCESS,
  payload: data
});
const carsDataError = (error) => ({
  type: CARS_DATA_ERROR,
  payload: error
});

export const fetchCarsData = () => dispatch => {
  dispatch(carsDataRequest());
  api.get('data/cars.json')
    .then((data) => {
      dispatch(carsDataSuccess(data));
      return data.data;
    })
    .catch((error) => {
      dispatch(carsDataError(error))
    });
};