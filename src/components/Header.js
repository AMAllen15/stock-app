// Write your Header component hereimport React from 'react';
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar header">
      <div className="navbar-header header-center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3 className="header-title">Stock Market App</h3>
        </Link>
        {/* Adding a link to the watchlist page */}
        <Link to="/chat" style={{ textDecoration: "none", marginLeft: "20px" }}>
          Chat Room
        </Link>
        <Link
          to="/watchlist"
          style={{ textDecoration: "none", marginLeft: "20px" }}
        >
          Watchlist
        </Link>
        <Link
          to="/portfolio"
          style={{ textDecoration: "none", marginLeft: "20px" }}
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
};

export default Header;
