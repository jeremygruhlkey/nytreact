import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/Search";
// import Articles from "./pages/Articles";
// import Saved from "./pages/Sved";
import Nav from "./components/Nav.js";


const App = () => 
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Search} />
        {/* <Route exact path="/articels" component={Articles} />
        <Route exact path="/saved" component={Saved} /> */}
      </Switch>
    </div>
  </Router>;

export default App;
