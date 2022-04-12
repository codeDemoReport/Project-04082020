import { combineReducers } from "redux";
import { SET_USER_EDIT } from "../../constant";

const initialState = {
  getListUser: [],
  getUserEdit: {},
};

function userReducer(state = initialState, action) {
  switch (action.type) {
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
