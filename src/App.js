import Register from "./pages/Register";
import Home from "./pages/Home";
import ListUser from "./pages/ListUser";
import Login from "./pages/Login";
import history from "./utils/history";
import ModifyUser from "./pages/ListUser/ModifyUser";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/list-user" component={ListUser} exact />
          <Route path="/list-user/add" component={ModifyUser} exact />
          <Route path="/list-user/edit/:id" component={ModifyUser} exact />
          <Route path="/register" component={Register} exact />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
