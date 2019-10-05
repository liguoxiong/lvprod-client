import React from "react";
import { Route } from "react-router";

export default (
  <Route>
    <Route exact path="/" />
    <Route exact path="/contact" />
    <Route exact path="/services" />
    <Route exact path="/constructions" />
    <Route exact path="/product/:id" />
    <Route exact path="/products/" />
  </Route>
);
