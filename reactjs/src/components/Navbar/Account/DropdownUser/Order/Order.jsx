import React from "react";
import { Button } from "react-bootstrap";
import "./Order.css";

function Order(props) {
  const showOrders = () => {
    window.location.href = "/orders";
  };

  return (
    <Button variant="account_order" onClick={showOrders}>
      Order
    </Button>
  );
}

export default Order;
