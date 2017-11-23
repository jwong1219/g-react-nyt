import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./Pages/Saved";
import Search from "./Pages/Search";
import Nav from "./Components/Nav";

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route path="/" component={Search} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
