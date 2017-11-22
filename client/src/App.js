import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./Pages/Saved";
import Search from "./Pages/Search";
// import Nav from "./Components/Nav";
import Article from "./Components/Article";
import api from "./Utils/api.js"
import Form from "./Components/Form";

const App = () => {
  return (
    <div className="container">
      
      <Router>
        <div>
          <Search />
        </div>
      </Router>
    </div>
  )
}

export default App;


// <Switch>
//         <Route exact path="/articles" component={Articles} />
//         <Route exact path="/saved" component={Saved} />
//         <Route path="/" component={Articles} />
//       </Switch>