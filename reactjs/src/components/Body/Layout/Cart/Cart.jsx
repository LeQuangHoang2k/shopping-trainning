import React, { useEffect, useState } from "react";
import Alert from "../../../../features/Alert";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import {
  cancel,
  dowCount,
  upCount,
  update,
} from "../../../../redux/actions/cart";

import "./Cart.css";

function Cart(props) {
  const cookies = new Cookies();

  const cartStorage = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [orderList, setOrderList] = useState([]);
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    console.log("cartStorage", cartStorage);
  }, [cartStorage, orderList]);

  const up = (item) => dispatch(upCount({ item }));

  const dow = async (item) => {
    if (item.count - 1 > 0) return dispatch(dowCount({ item }));

    const answer = await Swal.fire({
      title: "Do you want to remove ?",
      showDenyButton: true,
      confirmButtonText: `Remove`,
      denyButtonText: `Cancel`,
    });

    if (!answer.value) return;

    dispatch(cancel({ item }));
    Alert({ success: "delete success" });
  };

  const remove = async (item) => {
    const answer = await Swal.fire({
      title: "Do you want to remove ?",
      showDenyButton: true,
      confirmButtonText: `Remove`,
      denyButtonText: `Cancel`,
    });

    if (!answer.value) return;

    dispatch(cancel({ item }));
    Alert({ success: "delete success" });
  };

  const back = () => window.history.back();

  const getCheck = (e, item) => {
    let isChecked = e.target.checked;
    if (isChecked) {
      //add
      orderList.push({ item });
      console.log("orderList", orderList);
    } else {
      var index = orderList.findIndex(
        (elm) =>
          elm.product_id === item.product_id &&
          elm.optionValue === item.optionValue
      );

      orderList.splice(index, 1);
    }

    console.log("ischecked", isChecked, item);
    console.log("listOrder", orderList);
    totalPrice(orderList);
  };

  const totalPrice = (orderList) => {
    if (orderList.length <= 0) return setTotal(0);

    var sum = 0.0;
    var elmPrice = 0;
    orderList.forEach((element) => {
      sum =
        parseFloat(sum) +
        parseFloat(element.item.price) * parseFloat(element.item.count);
    });

    console.log("sum", parseFloat(sum));
    setTotal(sum);
  };

  const purchase = async () => {
    if (orderList.length <= 0)
      return Alert({ warning: "Please check your order" });

    const { order } = await updateOrderDB();
    // await updateOrderDetailDB(order);
    if (order) await updateCart();

    Alert({ success: "Pay success!" });
    console.log("purchase order list", orderList);
  };

  const updateOrderDB = async () => {
    const bodyParams = {
      user_id: cookies.get("user").id,
      address: cookies.get("user").address,
      phone: cookies.get("user").phone,
      total_price: total,
      orderList,
    };

    const config = {
      headers: { Authorization: `Bearer ${cookies.get("access_token")}` },
    };

    try {
      var res = await axios.post(
        `http://localhost:8000/api/orders`,
        bodyParams,
        config
      );

      console.log("res cart", res);
      console.log("body params", bodyParams);
      console.log("access_token", cookies.get("access_token"));
      console.log("abc", res.data.order);
      return { order: res.data.order };
    } catch (error) {
      console.log(error.response.data);
      return false;
    }
  };

  // const updateOrderDetailDB = async (order) => {
  //   console.log("hiệp 2", order, orderList);

  //   const config = {
  //     headers: { Authorization: `Bearer ${cookies.get("access_token")}` },
  //   };

  //   const bodyParams = {
  //     order,
  //   };

  //   // try {
  //   //   var res = await axios.post(
  //   //     `http://localhost:8000/api/orders`,
  //   //     bodyParams,
  //   //     config
  //   //   );
  //   //   console.log("res cart", res);
  //   //   console.log("body params", bodyParams);
  //   //   console.log("access_token", cookies.get("access_token"));
  //   // } catch (error) {
  //   //   console.log(error.response.data);
  //   // }
  // };

  const updateCart = () => {
    orderList.forEach((item) => {
      var index = cartStorage.list.findIndex(
        (elm) =>
          elm.product_id === item.item.product_id &&
          elm.optionValue === item.item.optionValue
      );

      console.log("index", index);
      cartStorage.list.splice(index, 1);
    });

    dispatch(update({ cart: cartStorage.list }));

    console.log("update cart", orderList, cartStorage.list);
  };

  return (
    <div className="cart_side">
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b className="cart_title">My Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  <p className="item_number">
                    {cartStorage.list.length} item
                    {cartStorage.list.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            </div>

            <div className="frame_list">
              {cartStorage.list.map((item, key) => {
                return (
                  <div key={key}>
                    <div className="row ">
                      <div className="row main align-items-center">
                        <div
                          // className="col"
                          style={{
                            width: "80px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: "15px",
                              height: "15px",
                              position: "relative",
                            }}
                          >
                            <label className="container">
                              &nbsp;
                              <input
                                type="checkbox"
                                defaultChecked={false}
                                onChange={(e) => getCheck(e, item)}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        </div>

                        <div className="product_id">#{item.product_id}</div>

                        <div className="col">
                          <img
                            className="img-fluid"
                            // src="https://i.imgur.com/1GrakTl.jpg"
                            src={item.picture}
                            alt="alt"
                          />
                        </div>
                        <div className="col-2">
                          <div className="row text-muted">
                            {/* iphone ({item.product_id}) */}
                          </div>
                          <div className="row item_name">{item.name}</div>
                        </div>
                        <div className="col">
                          <button
                            className="increase"
                            type="button"
                            onClick={() => dow(item)}
                          >
                            -
                          </button>
                          <button className="count" type="button">
                            {item.count}
                          </button>
                          <button
                            className="decrease"
                            type="button"
                            onClick={() => up(item)}
                          >
                            +
                          </button>
                        </div>
                        <div className="col">
                          <div className="row option_value">
                            {item.optionValue}
                          </div>
                        </div>

                        <div className="item_price">
                          {parseFloat(
                            parseFloat(item.price) * parseFloat(item.count)
                          ).toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                            minimumFractionDigits: 3,
                          })}
                        </div>

                        <div className="col item_remove">
                          <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => remove(item)}
                            pull="right"
                            border
                            color="white"
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="back-to-shop" onClick={back}>
              <button className="cart_back" type="button">
                &#8598;
              </button>
              &nbsp;
              <span className="text-muted" style={{ cursor: "pointer" }}>
                Back to shop
              </span>
            </div>
          </div>
          <div className="col-md-4 summary">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />

            <form>
              {/* <p>SHIPPING</p>
              <select>
                <option className="text-muted">
                  Standard-Delivery - 5.00 VND
                </option>
              </select> */}
              <p>GIVE CODE</p> <input id="code" placeholder="Enter your code" />
            </form>

            <div
              className="row"
              style={{
                // borderTop: "1px solid rgba(0,0,0,.1)",
                padding: "2vh 0",
              }}
            >
              <div className="col">Original Price</div>
              <div className="col text-right">
                {total > 0
                  ? parseFloat(total).toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                      minimumFractionDigits: 3,
                    })
                  : "0 VND"}
              </div>
            </div>

            <div
              className="row"
              style={{
                // borderTop: "1px solid rgba(0,0,0,.1)",
                padding: "2vh 0",
              }}
            >
              <div className="col">Discount Rate</div>
              <div className="col text-right">
                {total > 0
                  ? parseFloat(total).toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                      minimumFractionDigits: 3,
                    })
                  : "0 VND"}
              </div>
            </div>

            <div
              className="row"
              style={{
                // borderTop: "1px solid rgba(0,0,0,.1)",
                padding: "2vh 0",
              }}
            >
              <div className="col">Tax</div>
              <div className="col text-right">
                {total > 0
                  ? parseFloat(total).toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                      minimumFractionDigits: 3,
                    })
                  : "0 VND"}
              </div>
            </div>

            <div
              className="row"
              style={{
                // borderTop: "1px solid rgba(0,0,0,.1)",
                padding: "2vh 0",
              }}
            >
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">
                {total > 0
                  ? parseFloat(total).toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                      minimumFractionDigits: 3,
                    })
                  : "0 VND"}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="btn" onClick={purchase}>
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
