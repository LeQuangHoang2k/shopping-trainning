import React from "react";

import "./Cart.css";
// import CartIcon from "/images/CartIcon.png";

function Cart(props) {
  const showCart = () => {
    window.location.href = "/cart";
  };

  return (
    <div className="cart_wrapper" onClick={showCart}>
      <img src="/images/CartIcon.png" className="cart_image" alt="Image" />
      <div className="cart_name">Cart</div>
    </div>
  );
}

export default Cart;
