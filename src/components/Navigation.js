import React from "react";
// import { Link, withRouter } from "react-router-dom";

function Navigation() {
    return(
        <div className="navigation">
            <div className="container-flex">
          
              <span className="nav-link active" aria-current="page" >stocks-O</span>
              
              <ul className="justify-content-end">
              <li className="nav-item">
                  <a className="nav-link" href="/home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Log In</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signup">Sign Up</a>
                </li>
          
              
              </ul>
        </div>
         
        </div>
  
                          // {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
                          //   <div className="container">
                          //     <Link className="navbar-brand" to="/">
                          //     paperTrade
                          //     </Link>

                          //     <div>
                          //       <ul className="navbar-nav ml-auto">
                          //         <li
                          //           className={`nav-item  ${
                          //             props.location.pathname === "/" ? "active" : ""
                          //           }`}
                          //         >
                          //           <Link className="nav-link" to="/">
                          //             Home
                          //             <span className="sr-only">(current)</span>
                          //           </Link>
                          //         </li>
                          //         <li
                          //           className={`nav-item  ${
                          //             props.location.pathname === "/userprofile" ? "active" : ""
                          //           }`}
                          //         >
                          //           <Link className="nav-link" to="/userprofile">
                          //             User Profile
                          //           </Link>
                          //         </li>
                          //         <li
                          //           className={`nav-item  ${
                          //             props.location.pathname === "/myportfolio" ? "active" : ""
                          //           }`}
                          //         >
                          //           <Link className="nav-link" to="/myportfolio">
                          //             My Portfolio
                          //           </Link>
                          //         </li>
                          //       </ul>
                          //     </div>
                          //   </div>
                          // </nav> */}
    );
  
}

export default Navigation;


