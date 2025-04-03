import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/navbar.css"

const Navbar = () => {
  return (
      <nav className="navbar">
        {/* Shop Icon */}
      <NavLink to="/" end>
        <i className="bi bi-shop-window" />
      </NavLink>
       {/* Cart Icon with Badge */}
       <NavLink to="/cart" className={({ isActive }) => `${isActive && 'selected'}`}>
        <i className="bi bi-cart3" />
        <span className="cart-number">7</span>
      </NavLink>

      {/* Products Icon */}
      <NavLink to="/" className={({ isActive }) => (isActive ? "selected" : "")} title="Products" end>
        <i className="bi bi-grid" />
      </NavLink>
    </nav>
  
  )
}

export default Navbar