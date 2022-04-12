import { combineReducers } from "redux";
import {
  DELETE_USER,
  GET_LIST_USER_FAIL,
  GET_LIST_USER_SUCCESS,
  LOGIN_SUCCESS,
  SET_USER_EDIT,
} from "../../constant";

const initialState = {
  listUser: [],
  dataDelete: {},
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
    default:
      return state;
  }
}

export default combineReducers({
  userReducer,
});
