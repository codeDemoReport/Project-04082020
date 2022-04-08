import { Route, Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ListUser from "./pages/ListUser";
import Login from "./pages/Login";
import history from "./utils/history";
import ModifyUser from "./pages/ListUser/ModifyUser";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/list-user" component={ListUser} exact />
          <Route path="/list-user/add" component={ModifyUser} exact />
          <Route path="/list-user/edit" component={ModifyUser} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
