import { createStore, combineReducers, compose } from 'redux';
import placesReducer from './reducers/places';

let composedEnhancers = compose;

composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  places: placesReducer
});

const configureStore = () => {
  return createStore(rootReducer, composedEnhancers());
};

export default configureStore;
