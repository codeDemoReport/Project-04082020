import { Route, Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ListUser from "./pages/ListUser";
import Login from "./pages/Login";
import history from "./utils/history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/list-user" component={ListUser} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
