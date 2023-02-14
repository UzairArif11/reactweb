import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  onlyActiveOnIndex
                  exact
                  activeClassName="menu_active"
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onlyActiveOnIndex
                  exact
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/aboutUs"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onlyActiveOnIndex
                  exact
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/service"
                >
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onlyActiveOnIndex
                  exact
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/contact"
                >
                  ContactUs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
