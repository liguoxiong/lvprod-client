import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/index";
import HomeContainer from './hoc/HomeContainer'
import ProductPage from './Components/ProductPage'
import ContactPage from './Components/ContactPage'

function AppRouter() {
  return (
    <Router>
      <HomeContainer>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/product/:id" component={ProductPage} />
      </HomeContainer>
    </Router>
  );
}
export default AppRouter;
