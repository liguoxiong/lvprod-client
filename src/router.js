import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/index";
import ProductPage from './Components/ProductPage'
function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={ProductPage} />
    </Router>
  );
}
export default AppRouter;
