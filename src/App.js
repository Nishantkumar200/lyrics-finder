import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Index from "./Components/Index";
import Lyrics from "./Components/Lyrics";
import { Provider } from "./context";

function App() {
  return (
    <>
      <Provider>
        {/** Between the Provider all will be the children */}
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route extact path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
