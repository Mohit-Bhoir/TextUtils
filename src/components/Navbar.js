import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

//This is a jsx code...
//We write class as className &
//href="#" as href="/"
//for as htmlFor

//Here navbar is a component which is added in the app.js file
//We can add as many components as we can in the app.js folder

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li> */}
          </ul>
          {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label " htmlFor="flexSwitchCheckDefault">
               Enable DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//PropType basically suggest the type of a certain prop like string , number , etc
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

//If u dont give any attribute value then this default value will be set automatically
// Navbar.defaultProps = {
//   title: "Your Title Here",
//   aboutText: "Your Text Here",
// };

// An excuse is the difference between who u are and what us should be !
