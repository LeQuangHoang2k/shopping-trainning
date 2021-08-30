import React, { useEffect } from "react";
import "./OrderSide.css";
import axios from "axios";

function OrderSide(props) {
  useEffect(() => {
    getAllOrder();
  }, []);

  const getAllOrder = async () => {
    const config = {
      header: {
        Authorization: `Bearer`,
      },
    };

    // const res = axios.get("http://localhost:8000/orders", config);
  };

  return (
    <div className="order_side">
      <div className="wrapper">
        <div className="side_header">My order</div>
        <table className="side_inner">
          <tr className="row" style={{ padding: "0", margin: "0" }}>
            <th className="col-2 side_title">Mã đơn hàng</th>
            <th className="col-2 side_title">Ngày mua</th>
            <th className="col-4 side_title">Sản phẩm</th>
            <th className="col-2 side_title">Tổng tiền</th>
            <th className="col-2 side_title">Trạng thái đơn hàng</th>
          </tr>

          {[1, 2, 3, 4, 5, 6].map((key) => {
            return (
              <tr
                key={key}
                className="row"
                style={{ padding: "0", margin: "0" }}
              >
                <td className="col-2 side_content">
                  <a className="side_id" href="/orders">
                    #414100606
                  </a>
                </td>
                <td className="col-2 side_content">19/08/2021</td>
                <td className="col-4 side_content">
                  Sữa Rửa Mặt Cetaphil Gentle Skin Cleaner (500ml) -
                  8394107341305,9318637069637
                </td>
                <td className="col-2 side_content">306.850 VND</td>
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
