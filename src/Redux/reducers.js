import {
    LOGGING_IN,
    LOGGING_IN_SUCCESFUL,
    LOGGING_IN_FAILURE,
    CHECK_LOGIN_STATUS_FAIL,
    CHECK_LOGIN_STATUS_SUCCESS,
    LOG_OUT_USER,
    FETCH_ALL_USERS_START,
    FETCH_ALL_USERS_SUCCESS,
    FETCH_ALL_USERS_FAILED,
} from './actions';

const initState = {
    users:[],
    user:{},
    loading: false,
    error: null,
};

const usersReducer = (state = initState, action) => {
    switch (action.type) {
      case FETCH_ALL_USERS_START:
        return {
          ...state,
          loading: true,
        };
      case FETCH_ALL_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.users,
        };
      case FETCH_ALL_USERS_FAILED:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      case LOGGING_IN:
        return {
          ...state,
          loading: true,
        };
      case LOGGING_IN_SUCCESFUL:
        return {
          ...state,
          loading: false,
          user: action.user,
        };
      case LOGGING_IN_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    };
};


export default usersReducer;