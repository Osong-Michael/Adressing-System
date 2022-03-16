export const LOGGING_IN = 'LOGGING_IN';
export const LOGGING_IN_SUCCESFUL = 'LOGGING_IN_SUCCESFUL';
export const LOGGING_IN_FAILURE = 'LOGGING_IN_FAILURE';
export const CHECK_LOGIN_STATUS_FAIL = 'CHECK_LOGIN_STATUS_FAIL';
export const CHECK_LOGIN_STATUS_SUCCESS = 'CHECK_LOGIN_STATUS_SUCCESS';
export const LOG_OUT_USER = 'LOG_OUT_USER';

export const FETCH_ALL_USERS_START = 'FETCH_ALL_USERS_START';
export const FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS';
export const FETCH_ALL_USERS_FAILED = 'FETCH_ALL_NAICS_FAILED';

export function loggingIn() {
    return {
      type: LOGGING_IN,
    };
};
    
function logInSuccess(user) {
    return {
      type: LOGGING_IN_SUCCESFUL,
      user,
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
    
function userIsLoggedIn(user) {
    return {
      type: CHECK_LOGIN_STATUS_SUCCESS,
      user,
    };
};

function userIsLoggedOut(status) {
    return {
      type: LOG_OUT_USER,
      status,
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
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => dispatch(fetchingUsersSuccess(data)))
            .catch(err => dispatch(fetchingUsersFail(err)));
    }
}