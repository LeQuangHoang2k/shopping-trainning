

import React, { useEffect, useState } from "react";
import "./OrderSide.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Log } from "../../../../../features/Log";

function OrderSide(props) {
  const cookies = new Cookies();

  const [orderList, setOrderList] = useState([]);

  // const { access_token, user, token_type } = cookies;
  const access_token = cookies.get("access_token");
  const token_type = cookies.get("token_type");
  const user = cookies.get("user");

  useEffect(() => {
    getAllOrder();
    Log({ access_token });
    Log({ token_type });
    Log({ user_id: user.id });
  }, []);

  const getAllOrder = async () => {
    const config = {
      headers: {
        Authorization: `${token_type} ${access_token}`,
      },
    };

    const bodyParams = {
      user_id: user.id,
    };

    const res = await axios.get(
      "http://localhost:8000/api/orders",
      config,
      bodyParams
    );

    Log({ res });
    console.log(res.data.order);
    setOrderList(res.data.order);
  };

  return (
    <div className="order_side">
      <div className="wrapper">
        <div className="side_header">My order</div>
        <table className="side_inner">
          <thead>
            <tr className="row row col-12" style={{ padding: "0", margin: "0" }}>
              <th className="col-2 side_title">Mã đơn hàng</th>
              <th className="col-2 side_title">Ngày mua</th>
              <th className="col-4 side_title">Sản phẩm</th>
              <th className="col-2 side_title">Tổng tiền</th>
              <th className="col-2 side_title">Trạng thái đơn hàng</th>
            </tr>
          </thead>

          {orderList.map((item) => {
            return (
              <tbody
                key={item.id}
                className="row"
                style={{ padding: "0", margin: "0" }}
              >
                <tr className="row col-12" style={{ padding: "0", margin: "0" }}>
                  <td className="col-2 side_content">
                    <a className="side_id" href="/orders">
                      {item.id}
                    </a>
                  </td>
                  <td className="col-2 side_content">{item.created_at}</td>
                  <td className="col-4 side_content">
                    Sữa Rửa Mặt Cetaphil Gentle Skin Cleaner (500ml) -
                    8394107341305,9318637069637
                  </td>
                  <td className="col-2 side_content">{item.total_price} VND</td>
                  <td className="col-2 side_content">Bàn giao vận chuyển</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default OrderSide;
