import React from "react";
import AccountSideBar from "./AccountSideBar/AccountSideBar";
import "./Order.css";
import OrderSide from "./OrderSide/OrderSide";

function Order(props) {
  return (
    <div style={{ display: "flex" }}>
      <AccountSideBar />

      <OrderSide />
    </div>
  );
}

export default Order;
