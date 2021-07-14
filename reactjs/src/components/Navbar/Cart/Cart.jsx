import React from "react";

import "./Cart.css";
// import CartIcon from "/images/CartIcon.png";

function Cart(props) {
    return (
        <div className="cart_wrapper">
            <img src="/images/CartIcon.png" className="cart_image" alt="Image" />
            <div className="cart_title">Cart</div>
        </div>
    );
}

export default Cart;
