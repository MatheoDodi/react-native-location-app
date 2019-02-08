import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from './actionTypes';

export const addPlace = place => ({
  type: ADD_PLACE,
  payload: { place }
});

export const deletePlace = id => ({
  type: DELETE_PLACE,
  payload: { id }
});

export const selectPlace = id => ({
  type: SELECT_PLACE,
  payload: { id }
});

export const deselectPlace = () => ({
  type: DESELECT_PLACE
});
