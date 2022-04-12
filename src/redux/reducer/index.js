import { combineReducers } from "redux";
import {
  DELETE_USER,
  GET_LIST_USER_FAIL,
  GET_LIST_USER_SUCCESS,
  LOGIN_SUCCESS,
  SET_USER_EDIT,
  SET_EMAIL_VERYFY,
  LOGOUT,
  PROGRESS
} from "../../constant";

const initialState = {
  listUser: [],
  dataDelete: {},
  getUserEdit: {},
  infoUser: {},
  emailVerify: "",
  loading: false
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
        loading: action.payload
      }
      }
    case LOGOUT: {
      return {
        ...state,
        infoUser: action.payload,
      };
      }
    case GET_LIST_USER_SUCCESS: {
      return {
        ...state,
        listUser: [...action.payload],
      };
    }
    case GET_LIST_USER_FAIL: {
      return state;
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
    case SET_EMAIL_VERYFY: {
      return {
        ...state,
        emailVerify: action.payload
      }
      }
    default:
      return state;
  }
}

export default combineReducers({
  userReducer,
});
