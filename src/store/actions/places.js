import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

export const addPlace = place => ({
  type: ADD_PLACE,
  payload: { place }
});

export const deletePlace = id => ({
  type: DELETE_PLACE,
  payload: { id }
});
