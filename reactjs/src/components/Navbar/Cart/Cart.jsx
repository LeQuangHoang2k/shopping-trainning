import React from "react";

import "./Cart.css";
// import CartIcon from "/images/CartIcon.png";

function Cart(props) {
  const showCart = () => {
    window.location.href = "/cart";
  };

  return (
    <div className="cart_navbar_wrapper" onClick={showCart}>
      <img
        src="/images/CartIcon.png"
        className="cart_navbar_image"
        alt="Image"
      />
      <div className="cart_navbar_infor">
        <div className="cart_navbar_amount">10</div>
        <div className="cart_navbar_title">Cart</div>
      </div>
    </div>
  );
}

export default Cart;
