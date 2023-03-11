import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        {/* <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/products">Products</Link> */}

        <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/home">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/friends">Friends</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>

      <p>Common header</p>

      {/* <a href="/home">Home</a>
      <a href="/about">About</a> */}
    </div>
  );
};

export default Header;
