import React from "react";
import "../styles/cart.css";
import productList from "../data/productList.json";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../data/cartSlice";

const Cart = () => {
  const { cartProductIds } = useSelector((state) => state.cart);
  //Filter out only selected data in our cartProductData variable
  const cartProductData = productList.products.filter((product) => cartProductIds.includes(product.id));

  //Remove from Cart or clearAll actions, use cartslice
  const {removeFromCart, clearAllItems} = cartSlice.actions;

  //call useDispatch hook
  const dispatch = useDispatch();

  return (
    <div className="cart">
      {cartProductData.length > 0 && (
          <div className="cart-product">
          <h3 className="header">Items in cart</h3>

          {/* productList.products = display all data, but we want selected data in our cart */}
          {cartProductData.map((product) => {
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
                  <button className="btn btn-primary" onClick={() => dispatch(removeFromCart(product.id))}>
                  <i className="bi bi-trash-fill" /> Remove Item
                  </button>
                </div>
              </div>
            );
          })}
           <footer className="text-center">
            {/* Checkout button removes all items from the Cart */}
            <button className="btn btn-primary" onClick={() =>dispatch(clearAllItems()) }>CHECKOUT</button>
          </footer>
        </div>
        )}

     {cartProductData.length < 1 &&
     (<div className="text-center empty-cart">
      <i className="bi bi-cart3" />
      <p>Your cart is empty.</p>
      <p>You have not added any item to your cart.</p>
    </div>)
     }

   
    </div>
  );
};

export default Cart;
