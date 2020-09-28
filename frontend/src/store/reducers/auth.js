import ActionTypes from "../actions/auth";
import { createStore } from "redux";

const initialState = {
  isLoggedIn: !!localStorage.getItem("AUTH"),
  authToken: localStorage.getItem("AUTH"),
};

const Actions = {
  setLogin: (loginStatus, token) => {
    return {
      type: ActionTypes.SET_LOGIN,
      login: loginStatus,
      token: token,
    };
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_LOGIN:
      localStorage.setItem("AUTH", action.token);
      return { ...state, isLoggedIn: action.login, authToken: action.token };
    default:
      return state;
  }
};

const authStore = createStore(authReducer);

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    authToken: state.authToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeLogin: (isLoggedIn, authToken = null) => {
      dispatch(Actions.setLogin(isLoggedIn, authToken));
    },
  };
};

export { authStore, mapStateToProps, mapDispatchToProps };
