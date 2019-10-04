import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/index";
import HomeContainer from './hoc/HomeContainer'
import ProductPage from './Components/ProductPage'
import ContactPage from './Components/ContactPage'
import ServicePage from './Components/ServiceList'
import ConstructionPage from './Components/ConstructionList'

function AppRouter() {
  return (
    <Router>
      <HomeContainer>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/services" component={ServicePage} />
        <Route exact path="/constructions" component={ConstructionPage} />
        <Route exact path="/product/:id" component={ProductPage} />
      </HomeContainer>
    </Router>
  );
}
export default AppRouter;
