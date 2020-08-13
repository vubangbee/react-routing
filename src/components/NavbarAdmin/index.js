import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavbarAdmin extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          {/* Brand */}
          <NavLink className="navbar-brand" to="/">
            Logo
          </NavLink>
          {/* Toggler/collapsibe Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/dashboard"
                >
                  Dashboar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/add-user"
                >
                  Add User
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/add-movie"
                >
                  Add Movie
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
