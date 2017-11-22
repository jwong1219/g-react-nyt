import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./Pages/Saved";
import Search from "./Pages/Search";
// import Nav from "./Components/Nav";
import Article from "./Components/Article";
import api from "./Utils/api.js"
import Form from "./Components/Form";

const App = () => {
  console.log(`in app`)
  return (
    <Router>
      <div>
        <Search />

        {/*<button
          onClick={() => api.searchArticles({topic:"google", start:"20171117", end: "20171120"}).then((results) => console.log(results.data.response.docs[0].web_url))}>Search</button*/}      
      </div>
    </Router>
  )
}

export default App;


// <Switch>
//         <Route exact path="/articles" component={Articles} />
//         <Route exact path="/saved" component={Saved} />
//         <Route path="/" component={Articles} />
//       </Switch>