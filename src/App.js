import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import MasterPage from "./pages/MasterPage";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/">
              <MasterPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
