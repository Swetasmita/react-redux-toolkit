import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cartProductIds} = useSelector((state) => state.cart);
  return (
    <nav className="navbar">
      {/* Shop Icon */}
      <NavLink to="/" end>
        <i className="bi bi-shop-window" />
      </NavLink>
      {/* Cart Icon with Badge */}
      <NavLink
        to="/cart"
        className={({ isActive }) => `${isActive && "selected"}`}>

        {/* Number of items in the Navbar */}
        <i className="bi bi-cart3" />
        <sup className="cart-number">{cartProductIds.length}</sup>
      </NavLink>

      {/* Products Icon */}
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "selected" : "")}
        title="Products"
        end>
        <i className="bi bi-grid" />
      </NavLink>
    </nav>
  );
};

export default Navbar;
