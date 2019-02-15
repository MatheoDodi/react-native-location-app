import { ADD_PLACE, DELETE_PLACE } from './actionTypes';
import axios from 'axios';

const addPlace = (place, location, image) => ({
  type: ADD_PLACE,
  payload: { place, location, image }
});

export const handleAddPlace = (place, location, image) => {
  return dispatch => {
    console.log(image);
    const placeData = {
      name: place.placeName,
      location
    };
    // TODO
    // Implement POST method to store location images on firebase storage

    axios
      .post(
        'https://us-central1-react-hooks-matthew.cloudfunctions.net/storeImage',
        JSON.stringify({ image })
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));

    // axios
    //   .post(
    //     'https://react-hooks-matthew.firebaseio.com/place.json',
    //     JSON.stringify(placeData)
    //   )
    //   .then(parsedRes => console.log(parsedRes))
    //   .catch(err => console.log(err));

    // return dispatch(addPlace(place, location, image));
  };
};

export const deletePlace = id => ({
  type: DELETE_PLACE,
  payload: { id }
});
