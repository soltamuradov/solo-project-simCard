import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AdminPanelNumbers from './pages/AdminPanelNumbers';
import AdminPanelCategories from './pages/AdminPanelCategories';
import Cart from './pages/Cart';

function Routes() {
  return (
    <Switch>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/numbers">
        <AdminPanelNumbers />
      </Route>
      <Route path="/categories">
        <AdminPanelCategories />
      </Route>
      <Route path="/about">
        <About />
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
}

export default Routes;
