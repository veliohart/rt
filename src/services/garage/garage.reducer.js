import {
  CARS_DATA_REQUEST,
  CARS_DATA_SUCCESS,
  CARS_DATA_ERROR
} from './garage.actions';

const defaultState = {
  loading: false,
  data: [],
  error: null
};

function carsReducer (state = defaultState, action) {
  switch (action.type) {
    case CARS_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case CARS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case CARS_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default carsReducer;