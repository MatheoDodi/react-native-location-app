import { createStore, combineReducers, compose } from 'redux';
import placesReducer from './reducers/places';
import authReducer from './reducers/auth';

let composedEnhancers = compose;

composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  places: placesReducer,
  auth: authReducer
});

const configureStore = () => {
  return createStore(rootReducer, composedEnhancers());
};

export default configureStore;
