import React from "react";
import { Redirect, Route } from "react-router-dom";
import { toastError } from "../../utils/toast";

function AdminLayout({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={(routeProps) => {
        const info = JSON.parse(localStorage.getItem("info"));
        if (info?.role === 1) return <Component {...routeProps} />;
        else if (info?.role === 0) {
          toastError("Bạn không có quyền truy cập!");
          return <Redirect to={{ pathname: "/" }} />;
        } else return <Redirect to={{ pathname: "/login" }} />;
      }}
    />
  );
}

export default AdminLayout;
