import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/login/login.view";
// import Home from "./Components/index";
function AppRouter() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      {/* <Route exact path="/" component={Home} /> */}
    </Router>
  );
}
export default AppRouter;
