import React from "react";
import "./OrderSide.css";

function OrderSide(props) {
  return (
    <div className="order_side">
      <div className="wrapper">
        <div className="side_header">My order</div>
        <table className="side_inner">
          <tr className="" style={{ display: "flex" }}>
            <th className="col side_title">Mã đơn hàng</th>
            <th className="col side_title">Ngày mua</th>
            <th className="col side_title">Sản phẩm</th>
            <th className="col side_title">Tổng tiền</th>
            <th className="col side_title">Trạng thái đơn hàng</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default OrderSide;
