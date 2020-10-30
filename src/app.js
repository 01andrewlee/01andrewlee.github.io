// src/app.js

import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Footer, Loading } from "./components";
import { Home, Profile, ExternalApi, Product } from "./views";
import { NotFoundPage } from './views/errors';
import ProtectedRoute from "./auth/protected-route";
import {rootPath, productPath, profilePath, externalApiPath, error404Path}  from './routes';


import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path={rootPath} exact component={Home} />
          <ProtectedRoute path={profilePath} component={Profile} />
          <ProtectedRoute path={externalApiPath} component={ExternalApi} />
          <Route path={productPath} component={Product} />
          <Route path={error404Path} exact component={NotFoundPage}/>
          <Redirect to={NotFoundPage}/>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
