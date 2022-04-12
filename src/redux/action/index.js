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
  LOGOUT,
  SET_EMAIL_VERYFY,
  SET_USER_EDIT,
} from "../../constant";
import axios from "axios";
import { toastError, toastSuccess } from "../../utils/toast";
import history from "../../utils/history";

const url = "http://192.168.68.51:3000/api";

export const login = (params) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/auth/login`, { ...params });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data.user,
    });
    localStorage.setItem("token", response.data.accessToken);
    localStorage.setItem("prevUser", response.data.user.email);
    toastSuccess("Đăng nhập thành công!");
    history.push("/");
  } catch (error) {
    toastError(error.response.data.error);
  }
};

export const register = (params) => async (dispatch) => {
  try {
    const res = await axios.post(`${url}/auth/register`, { ...params });
    console.log(res.data)
    dispatch({
      type: SET_EMAIL_VERYFY,
      payload: params.email
    })
    toastSuccess(res.data.success);
    history.push("/verify-register");
  } catch (error) {
    toastError(error.response.data.error);
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT,
    payload: {}
  })
}

export const getListUser = (params) => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/user`);

    dispatch({
      type: GET_LIST_USER_SUCCESS,
      payload: response.data.users,
    });
  } catch (error) {
    dispatch({
      type: GET_LIST_USER_FAIL,
      payload: error.message,
    });
  }
};

export const createUser = (params) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/user`, { ...params });

    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: response.data,
    });
    toastSuccess("Thêm thành công!");
    history.push("/list-user");
  } catch (error) {
    dispatch({
      type: CREATE_USER_FAIL,
      payload: error.message,
    });
  }
};

export const deleteUser = (params) => async (dispatch) => {
  const { id } = params;
  try {
    const response = await axios.delete(`${url}/user/${id}`);

    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: response.data,
    });
    toastSuccess("Xóa thành công!");
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.message,
    });
  }
};

export const editUser = (params) => async (dispatch) => {
  const { id } = params;
  try {
    const response = await axios.put(`${url}/user/${id}`, { ...params });

    dispatch({
      type: EDIT_USER_SUCCESS,
      payload: response.data,
    });
    toastSuccess("Cập nhật thành công!");
    history.push("/list-user");
  } catch (error) {
    dispatch({
      type: EDIT_USER_FAIL,
      payload: error.message,
    });
  }
};

export const setUserEdit = (params) => (dispatch) => {
  dispatch({
    type: SET_USER_EDIT,
    payload: params,
  });
};
