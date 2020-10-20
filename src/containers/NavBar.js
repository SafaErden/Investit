import React from 'react';

const NavBar = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-warning rounded mb-4 px-3">
    <span className="navbar-brand">Stock News</span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button type="button" className="nav-link border-0 bg-warning" href="#">Features</button>
        </li>
        <li className="nav-item">
          <button type="button" className="nav-link  border-0 bg-warning" href="#">Pricing</button>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
