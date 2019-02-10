import { LOG_IN_USER } from '../actions/actionTypes';

const initialState = {
  loggedIn: false,
  authUser: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_USER:
      const { username, password } = action.payload.credentials;
      if (username === 'DemoUser' && password === '123456') {
        action.payload.navigation();
        return {
          ...state,
          loggedIn: true,
          authUser: {
            firstName: 'Matthew',
            lastName: 'Dodi'
          }
        };
      } else {
        return {
          ...state,
          error: 'Username or Password may be incorrect'
        };
      }
    default:
      return state;
  }
};

export default reducer;
