import React from "react";
import "../styles/cart.css";
import productList from "../data/productList.json";
const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-product">
        <h3 className="header">Items in cart</h3>
        {productList.products.map((product) => {
          return (
            <div key={product.id} className="row">
              <img
                className="item-image"
                src={product.imageUrl}
                alt="product"
              />
              <div className="item-info">
                <h4>{product.name}</h4>
                <p className="text-truncate">{product.detail}</p>
                <button className="btn btn-primary">
                  <i className="bi bi-trash-fill" /> Remove Item
                </button>
              </div>
            </div>
          );
        })}
         <footer className="text-center">
          <button className="btn btn-primary">CHECKOUT</button>
        </footer>
      </div>

      <div className="text-center empty-cart">
        <i className="bi bi-cart3" />
        <p>Your cart is empty.</p>
        <p>You have not added any item to your cart.</p>
      </div>
    </div>
  );
};

export default Cart;
