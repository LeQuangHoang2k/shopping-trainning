import React from "react";

import "./Cart.css";
// import CartIcon from "/images/CartIcon.png";

function Cart(props) {
  const showOrders = () => {
    window.location.href = "/orders";
  };

  return (
    <div className="cart_wrapper" onClick={showOrders}>
      <img src="/images/CartIcon.png" className="cart_image" alt="Image" />
      <div className="cart_name">Cart</div>
    </div>
  );
}

export default Cart;
