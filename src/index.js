import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import {
  useHistory,
  useLocation,
  useParams,
  BrowserRouter,
  Router,
  Route,
} from "react-router-dom";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebaseconfig";

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/Home/:User">
          <Home />
        </Route>
      </React.Fragment>
    </BrowserRouter>
  </FirebaseAppProvider>,
  document.getElementById("root")
);
