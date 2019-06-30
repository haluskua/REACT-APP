import React from "react";
import { getAnimals, createAnimal } from "../api/animals";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Animals from "./src/component/Animals";

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/Header" component={Header} />
          <Route path="/Body" component={Body} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
