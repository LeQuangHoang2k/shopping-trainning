import React from "react";
import AccountSidebar from "./AccountSidebar/AccountSidebar";
import "./Order.css";
import OrderSide from "./OrderSide/OrderSide";

function Order(props) {
  return (
    <div style={{ display: "flex" }}>
      <AccountSidebar />

      <OrderSide />
    </div>
  );
}

export default Order;
