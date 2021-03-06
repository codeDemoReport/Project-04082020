export const dataArr = [
  {
    id: 1,
    name: "fullName",
    label: "Full Name",
    placeholder: "Enter your full name...",
    type: "text",
  },
  {
    id: 2,
    name: "email",
    label: "Email",
    placeholder: "Enter your email...",
    type: "text",
  },
  {
    id: 3,
    name: "password",
    label: "Password",
    placeholder: "Enter your password...",
    type: "password",
  },
  {
    id: 4,
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Enter your confirm password...",
    type: "password",
  },
];

export const MenuLeftHeader = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Users",
    path: "/list-user",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

export const MenuRightHeader = [
  {
    title: "Login",
    path: "/login",
  },
  {
    title: "Register",
    path: "/register",
  },
];

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const GET_LIST_USER = "GET_LIST_USER";

export const DELETE_USER = "DELETE_USER";

export const SET_USER_EDIT = "SET_USER_EDIT";

export const SET_EMAIL_VERIFY = "SET_EMAIL_VERIFY";
export const LOGOUT = "LOGOUT";
export const PROGRESS = "PROGRESS";
