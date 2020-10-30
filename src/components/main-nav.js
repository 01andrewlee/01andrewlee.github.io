import {NavLink} from "react-router-dom";
import React from "react";
import {rootPath, productPath, profilePath, externalApiPath}  from '../routes';


const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to={rootPath}
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to={profilePath}
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Profile
    </NavLink>
    {/* <NavLink
      to={externalApiPath}
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      External API
    </NavLink> */}
    <NavLink
      to={productPath}
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Products
    </NavLink>
  </div>
);

export default MainNav;
