import axios from "axios";
import {
  DELETE_USER,
  GET_LIST_USER_FAIL,
  GET_LIST_USER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_EMAIL_VERYFY,
  SET_USER_EDIT,
} from "../../constant";
import history from "../../utils/history";
import { toastError, toastSuccess } from "../../utils/toast";

const url = "http://192.168.68.51:3000/api";
const token = localStorage.getItem("token");
const headers = `Authorization: Bearer ${token}`;

export const login = (params) => async (dispatch) => {
  const { checkRemember } = params;
  try {
    const response = await axios.post(`${url}/auth/login`, { ...params });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data.user,
    });
    localStorage.setItem("token", response.data.accessToken);
    localStorage.setItem(
      "info",
      JSON.stringify({
        email: response.data.user.email,
        fullName: response.data.user.fullName,
        role: response.data.user.isAdmin,
      })
    );
    localStorage.removeItem("prevEmail");
    if (checkRemember) {
      localStorage.setItem("prevEmail", response.data.user.email);
    }
    toastSuccess(response.data.msg);
    history.push("/");
  } catch (error) {
    toastError(error.response.data.msg);
  }
};

export const register = (params) => async (dispatch) => {
  try {
    const res = await axios.post(`${url}/auth/register`, { ...params });

    dispatch({
      type: SET_EMAIL_VERYFY,
      payload: params.email,
    });
    toastSuccess(res.data.msg);
    history.push("/verify-register");
  } catch (error) {
    toastError(error.response.data.msg);
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("info");
  history.push("/");
  dispatch({
    type: LOGOUT,
    payload: {},
  });
};

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

    toastSuccess(response.data.msg);
    history.push("/list-user");
  } catch (error) {
    toastError(error.response.data.msg);
  }
};

export const deleteUser = (params) => async (dispatch) => {
  const { id } = params;
  try {
    const response = await axios.delete(`${url}/user/${id}`);

    dispatch({
      type: DELETE_USER,
      payload: response.data,
    });
    toastSuccess(response.data.msg);
  } catch (error) {
    toastError(error.response.data.msg);
  }
};

export const editUser = (params) => async (dispatch) => {
  const { id } = params;
  try {
    const response = await axios.put(`${url}/user/${id}`, { ...params });

    toastSuccess(response.data.msg);
    history.push("/list-user");
  } catch (error) {
    toastError(error.response.data.msg);
  }
};

export const setUserEdit = (params) => (dispatch) => {
  dispatch({
    type: SET_USER_EDIT,
    payload: params,
  });
};
