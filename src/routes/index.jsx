import { Route, Switch } from "react-router-dom";

import Login from "../pages/login";
import Contacts from "../pages/contacts";
import CatsPage from "../pages/cats";
import DogsPage from "../pages/dogs";
import Customers from "../pages/customer";

function Routes() {
  return (
    <Switch>
      <Route path="/contacts">
        <Contacts />
      </Route>
      <Route path="/cats">
        <CatsPage />
      </Route>
      <Route path="/dogs">
        <DogsPage />
      </Route>
      <Route path="/customers">
        <Customers />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default Routes;
