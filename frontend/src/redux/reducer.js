import { SETLOGINTOKEN } from "./actions";

const SaveLocation = 'auth';

const initialState = {
  auth: localStorage.getItem(SaveLocation) || null
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SETLOGINTOKEN:
      const newAuth = action.auth;
      if (newAuth === null) {
        localStorage.removeItem(SaveLocation);
      } else {
        localStorage.setItem(SaveLocation, newAuth);
      }
      return {...state, auth: newAuth}
    default:
      return state;
  }
}