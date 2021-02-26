import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListProducts from "../pages/ListProducts";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ListProducts />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
