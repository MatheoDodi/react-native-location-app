import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [
          ...state.places,
          {
            name: action.payload.place.placeName,
            image: action.payload.place.placeImage,
            key: Math.random()
          }
        ]
      };
    case DELETE_PLACE:
      const places = state.places.filter(
        place => place.key !== action.payload.id
      );
      return {
        ...state,
        places
      };
    case SELECT_PLACE:
      const selectedPlace = state.places.find(
        place => place.key === action.payload.id
      );
      return {
        ...state,
        selectedPlace
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;
