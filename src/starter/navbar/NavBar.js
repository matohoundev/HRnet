import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <h1>HRnet</h1>
      </Link>
      <div className="box-link">
        <Link to="/">Home</Link>
        <Link to="employee-list">View Current Employees</Link>
      </div>
    </nav>
  );
};

export default NavBar;
