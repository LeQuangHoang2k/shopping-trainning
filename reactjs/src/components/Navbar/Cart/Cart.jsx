import React, { useState } from "react";

import "./Cart.css";
// import CartIcon from "/images/CartIcon.png";

function Cart(props) {
  const [amount, setAmount] = useState(1);
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
        {/* {amount > 0 ? amount : ""} */}
        <div className="cart_navbar_box">
          <div className="cart_navbar_amount" style={{ display: amount > 0 ? "block" : "none" }}>{amount}</div>
        </div>
        <div className="cart_navbar_title">Cart</div>
      </div>
    </div>
  );
}

export default Cart;
