import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { cancel, dowCount, upCount } from "../../../../../redux/actions/cart";
import Alert from "../../../../../features/Alert";
import Swal from "sweetalert2";

function List(props) {
  const { orderList, totalPriceHandle } = props;
  const cartStorage = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
    totalPriceHandle(orderList);
  };

  return (
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
                    <div className="row option_value">{item.optionValue}</div>
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
  );
}

export default List;
