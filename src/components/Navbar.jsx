import React from "react";
import logo from './Images/hetailogo.png'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light" style={{backgroundColor: '#FAFAFA'}}>
        <div className="container-fluid">
        <a class="navbar-brand p-4" href="#">
      <img src={logo} alt="" width="151" height="100"/>
    </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active p-4" aria-current="page" href="#">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link active p-4" aria-current="page" href="#">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link active p-4" aria-current="page" href="#">
                  DIVERSIFICATION
                </a>
              </li>
              <li className="nav-item  ">
              <a className="nav-link active p-4" aria-current="page" href="#">
                  OUR PROCESS
                </a>
                
                
              </li>
              <li className="nav-item">
                <a className="nav-link active p-4" aria-current="page" href="#">
                  TESTIMONIALS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active p-4" aria-current="page" href="#">
                  CARRIERS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active p-4" aria-current="page" href="#">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
