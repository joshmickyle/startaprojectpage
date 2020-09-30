import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div>
      {/*<nav>
        <div className="nav-wrapper">
          <div className="left">
            <Link to="!#" className="brand-logo left hide-on-med-and-down ">
              LC Studios
            </Link>
            <a
              to="#"
              className="sidenav-trigger show-on-med-and-down"
              data-target="slide-out"
            >
              <i className="material-icons">menu</i>
            </a>
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Probono</Link>
            </li>
            <li>
              <Link to="/startproject">New Project</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* side nav */}
      {/*
      <ul id="slide-out" className="sidenav">
        <li>
          <Link to="/">Probono</Link>
        </li>
        <li>
          <Link to="/startproject">New Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>*/}
    </div>
  );
}

export default Nav;
