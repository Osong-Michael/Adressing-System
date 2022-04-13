import API from './api'

export const LOGGING_IN = 'LOGGING_IN';
export const LOGGING_IN_SUCCESFUL = 'LOGGING_IN_SUCCESFUL';
export const LOGGING_IN_FAILURE = 'LOGGING_IN_FAILURE';
export const CHECK_LOGIN_STATUS_START = 'CHECK_LOGIN_STATUS_START';
export const CHECK_LOGIN_STATUS_FAIL = 'CHECK_LOGIN_STATUS_FAIL';
export const CHECK_LOGIN_STATUS_SUCCESS = 'CHECK_LOGIN_STATUS_SUCCESS';
export const LOG_OUT_USER = 'LOG_OUT_USER';
export const USER_NOT_LOGGED_IN = 'USER_NOT_LOGGED_IN';

export const FETCH_ALL_USERS_START = 'FETCH_ALL_USERS_START';
export const FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS';
export const FETCH_ALL_USERS_FAILED = 'FETCH_ALL_NAICS_FAILED';

export function loggingIn() {
    return {
      type: LOGGING_IN,
    };
};
    
function logInSuccess(token) {
    return {
      type: LOGGING_IN_SUCCESFUL,
      token,
    };
};
    
function logInError(error) {
    return {
      type: LOGGING_IN_FAILURE,
      error,
    };
};

function userIsLoggedInFalse() {
    return {
      type: CHECK_LOGIN_STATUS_FAIL,
    };
};
    
function userIsLoggedIn(token) {
    return {
      type: CHECK_LOGIN_STATUS_SUCCESS,
      token,
    };
};

function userIsLoggedOut() {
    return {
      type: LOG_OUT_USER,
    };
};

function fetchingUsersStart() {
    return {
      type: FETCH_ALL_USERS_START,
    };
  };
  
function fetchingUsersSuccess(users) {
    return {
      type: FETCH_ALL_USERS_SUCCESS,
      users
    };
};
  
function fetchingUsersFail(error) {
    return {
      type: FETCH_ALL_USERS_FAILED,
      error
    };
};


// Action Methods.......

export const getUsers = () => {
    return async dispatch => {
        dispatch(fetchingUsersStart());
        await API.get('/clients')
          .then(res => dispatch(fetchingUsersSuccess(res.data)))
          .catch(err => dispatch(fetchingUsersFail(err)));
    }
}

export const logInUser = ({ username, password}) => {
  return async dispatch => {
    dispatch(loggingIn());
    await API.post('/signin',
      {
        username,
        password
      })
      .then(res => {
        dispatch(logInSuccess(res.data.token))
        localStorage.setItem('userToken', JSON.stringify(res.data.token));
        console.log('RES', res)
      })
      .catch(error => {
        dispatch(logInError(error))
        console.log('ERR', error)
      });
  };
}

export const logUserOut = () => {
  localStorage.removeItem('userToken');
  return dispatch => {
    dispatch(userIsLoggedOut());
  };
}

export const checkStatus = () => {
  const token = JSON.parse(localStorage.getItem('userToken'));
  return dispatch => {
    if (token !== null) {
      dispatch(userIsLoggedIn(token));
      return token;
    }
    dispatch(userIsLoggedInFalse());
    return {
      type: USER_NOT_LOGGED_IN,
      loggedIn: false,
    };
  };
};