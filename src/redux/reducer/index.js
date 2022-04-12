import { combineReducers } from "redux";
import {
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  EDIT_USER_FAIL,
  EDIT_USER_SUCCESS,
  GET_LIST_USER_FAIL,
  GET_LIST_USER_SUCCESS,
  LOGIN_SUCCESS,
  SET_USER_EDIT,
} from "../../constant";

const initialState = {
  listUser: [],
  dataCreate: {},
  dataDelete: {},
  dataEdit: {},
  getUserEdit: {},
  infoUser: {},
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        infoUser: { ...action.payload },
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
    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        dataCreate: { ...action.payload },
      };
    }
    case CREATE_USER_FAIL: {
      return state;
    }
    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        dataDelete: { ...action.payload },
      };
    }
    case DELETE_USER_FAIL: {
      return state;
    }
    case EDIT_USER_SUCCESS: {
      return {
        ...state,
        dataEdit: { ...action.payload },
      };
    }
    case EDIT_USER_FAIL: {
      return state;
    }
    case SET_USER_EDIT: {
      return {
        ...state,
        getUserEdit: { ...action.payload },
      };
    }
    default:
      return state;
  }
}

export default combineReducers({
  userReducer,
});
