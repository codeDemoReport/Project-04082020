import { SET_USER_EDIT } from "../../constant";

export const setUserEdit = (params) => (dispatch) => {
  dispatch({
    type: SET_USER_EDIT,
    payload: params,
  });
};
