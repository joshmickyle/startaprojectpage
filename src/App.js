import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Contactus from "./contact/Contactus";
import Probono from "./probono/Probono";
import Startproject from "./startproject/Startproject";
import "materialize-css/dist/css/materialize.min.css";
import Nav from "./nav/Nav";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  useEffect(() => {
    //initializing materialize css
    M.AutoInit();
  });
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Probono} />
          <Route path="/contact" component={Contactus} />
          <Route path="/startproject" component={Startproject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
