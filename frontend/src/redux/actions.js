export const SETLOGINTOKEN = 'SETLOGIN';

export const setLoginToken = (auth) => {
  return {
    type: SETLOGINTOKEN,
    auth: auth
  }
}
export const mapStateToProps = state => {
  return {
    token: state.auth,
    isLoggedIn: state.auth ? true: false
  }
}
export const mapDispatchToProps = dispatch => {
  return {
    onChangeLogin: auth => {
      dispatch(setLoginToken(auth))
    }
  }
}