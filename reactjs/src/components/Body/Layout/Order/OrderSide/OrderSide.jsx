import React from "react";
import "./OrderSide.css";

function OrderSide(props) {
  return (
    <div className="order_side">
      <div className="wrapper">
        <div className="side_header">My order</div>
        <table className="side_inner">
          <tr className="" style={{ display: "flex" }}>
            <th className="col-2 side_title">Mã đơn hàng</th>
            <th className="col-2 side_title">Ngày mua</th>
            <th className="col-4 side_title">Sản phẩm</th>
            <th className="col-2 side_title">Tổng tiền</th>
            <th className="col-2 side_title">Trạng thái đơn hàng</th>
          </tr>

          {[1, 2, 3, 4, 5, 6].map((key) => {
            return (
              <tr key={key} className="" style={{ display: "flex" }}>
                <td className="col-2 side_content">
                  <a href="/orders">#414100606</a>
                </td>
                <td className="col-2 side_content">19/08/2021</td>
                <td className="col-4 side_content">
                  Sữa Rửa Mặt Cetaphil Gentle Skin Cleaner (500ml) -
                  8394107341305,9318637069637
                </td>
                <td className="col-2 side_content">306.850 ₫</td>
                <td className="col-2 side_content">Bàn giao vận chuyển</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default OrderSide;
