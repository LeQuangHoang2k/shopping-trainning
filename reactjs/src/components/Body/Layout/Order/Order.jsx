import React from "react";
import "./Order.css";

function Order(props) {
  return (
    <div style={{ display: "flex" }}>
      <div className="account_sidebar">
        <div className="wrapper">account SideBAr</div>
      </div>
      <div className="order_sidebar">
        <div className="wrapper">List Ordered</div>
      </div>
    </div>
  );
}

export default Order;
