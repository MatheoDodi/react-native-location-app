import { LOG_IN_USER } from './actionTypes';

export const loginUser = (credentials, navigation) => ({
  type: LOG_IN_USER,
  payload: {
    credentials,
    navigation
  }
});
