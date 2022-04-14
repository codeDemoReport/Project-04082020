import axios from "axios";
import {
  DELETE_USER,
  GET_LIST_USER,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_EMAIL_VERIFY,
  SET_USER_EDIT,
} from "../../constant";
import history from "../../utils/history";
import { toastError, toastSuccess } from "../../utils/toast";

const url = "http://192.168.68.51:3000/api";

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
      type: SET_EMAIL_VERIFY,
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
  const token = localStorage.getItem("token");
  const headers = { authorization: `Bearer ${token}` };
  const { page, limit } = params;
  try {
    const response = await axios.get(
      `${url}/user?page=${page}&limit=${limit}`,
      { headers }
    );

    dispatch({
      type: GET_LIST_USER,
      payload: response.data,
    });
  } catch (error) {
    toastError(error.response.data.error);
    if (error.response.data.status === 456) dispatch(logout());
  }
};

export const createUser = (params) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const headers = { authorization: `Bearer ${token}` };
  try {
    const response = await axios.post(
      `${url}/user`,
      { ...params },
      { headers }
    );

    if (response.data.success) toastSuccess(response.data.success);
    history.push("/list-user");
  } catch (error) {
    toastError(error.response.data.error);
    if (error.response.data.status === 456) dispatch(logout());
  }
};

export const deleteUser = (params) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const headers = { authorization: `Bearer ${token}` };
  const { id } = params;
  try {
    const response = await axios.delete(`${url}/user/${id}`, { headers });

    dispatch({
      type: DELETE_USER,
      payload: response.data,
    });
    if (response.data.success) toastSuccess(response.data.success);
  } catch (error) {
    toastError(error.response.data.error);
    if (error.response.data.status === 456) dispatch(logout());
  }
};

export const editUser = (params) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const headers = { authorization: `Bearer ${token}` };
  const { id } = params;
  try {
    const response = await axios.put(
      `${url}/user/${id}`,
      { ...params },
      { headers }
    );

    if (response.data.success) toastSuccess(response.data.success);
    history.push("/list-user");
  } catch (error) {
    toastError(error.response.data.error);
    if (error.response.data.status === 456) dispatch(logout());
  }
};

export const setUserEdit = (params) => (dispatch) => {
  dispatch({
    type: SET_USER_EDIT,
    payload: params,
  });
};
