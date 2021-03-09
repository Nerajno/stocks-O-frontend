import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return(
        <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
           paperTrade
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/userprofile" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/userprofile">
                  User Profile
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/myportfolio" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/myportfolio">
                  My Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);


