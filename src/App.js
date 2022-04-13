import { Route, Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import AdminLayout from "./layouts/AdminLayout";
import WatingVerify from "./pages/verifyEmail/WatingVerify";
import VerifyToken from "./pages/verifyEmail/VerifyToken";
import Home from "./pages/Home";
import ListUser from "./pages/ListUser";
import ModifyUser from "./pages/ListUser/ModifyUser";
import Login from "./pages/Login";
import Register from "./pages/Register";
import history from "./utils/history";

import CircularProgress from "@mui/material/CircularProgress";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/login" component={Login} exact />
          <AdminLayout path="/list-user" component={ListUser} exact />
          <AdminLayout path="/list-user/add" component={ModifyUser} exact />
          <AdminLayout
            path="/list-user/edit/:id"
            component={ModifyUser}
            exact
          />
          <Route path={"/verify-register"} component={WatingVerify} exact />
          <Route
            path={"/verify-register-success"}
            component={VerifyToken}
            exact
          />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
