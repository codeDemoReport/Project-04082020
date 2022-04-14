import { combineReducers } from "redux";
import {
  DELETE_USER,
  GET_LIST_USER,
  LOGIN_SUCCESS,
  SET_USER_EDIT,
  SET_EMAIL_VERIFY,
  LOGOUT,
  PROGRESS,
} from "../../constant";

const initialState = {
  users: {},
  dataDelete: {},
  getUserEdit: {},
  infoUser: {},
  emailVerify: "",
  loading: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        infoUser: { ...action.payload },
      };
    }
    case PROGRESS: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        infoUser: action.payload,
      };
    }
    case GET_LIST_USER: {
      return {
        ...state,
        users: { ...action.payload },
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        dataDelete: { ...action.payload },
      };
    }
    case SET_USER_EDIT: {
      return {
        ...state,
        getUserEdit: { ...action.payload },
      };
    }
    case SET_EMAIL_VERIFY: {
      return {
        ...state,
        emailVerify: action.payload,
      };
    }
    default:
      return state;
  }
}

export default combineReducers({
  userReducer,
});
