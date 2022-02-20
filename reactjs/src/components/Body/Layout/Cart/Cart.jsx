import React, { useEffect, useState } from "react";
import Alert from "../../../../features/Alert";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import axios from "axios";

import { update } from "../../../../redux/actions/cart";

import "./Cart.css";
import Summary from "./Summary/Summary";
import List from "./List/List";
import { Log } from "../../../../features/Log";

function Cart(props) {
  const cookies = new Cookies();

  const cartStorage = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [orderList, setOrderList] = useState([]);
  const [recordCode, setRecordCode] = useState({});

  const [totalOriginalPrice, setTotalOriginalPrice] = useState(0);
  const [tax, setTax] = useState(10);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    Log({ cartStorage });
    Log({ recordCode });
  }, [cartStorage, recordCode]);

  const totalPriceHandle = (orderList) => {
    if (orderList.length <= 0) return setTotalOriginalPrice(0);

    var sum = 0.0;
    orderList.forEach((element) => {
      sum =
        parseFloat(sum) +
        parseFloat(element.item.price) * parseFloat(element.item.count);
    });

    console.log("totalOriginalPrice", parseFloat(sum));
    setTotalOriginalPrice(sum);
  };

  const purchase = async () => {
    if (orderList.length <= 0) {
      Alert({ warning: "Please check your order" });
      return false;
    }

    const { order } = await onPurchaseHandle();
    if (order === "error") {
      Alert({ warning: "ko hỉu" });
      return false;
    }
    await updateCart();

    Alert({ success: "Purchase success!" });
    Log({ orderList });

    return true;
  };

  const onPurchaseHandle = async () => {
    const bodyParams = {
      user_id: cookies.get("user").id,
      address: cookies.get("user").address,
      phone: cookies.get("user").phone,
      tax,
      discount_id:
        recordCode && Object.keys(recordCode).length > 0 ? recordCode.id : null,
      total_price: totalPrice,
      orderList,
      record_code: recordCode,
    };

    Log({ bodyParams });

    const config = {
      headers: { Authorization: `Bearer ${cookies.get("access_token")}` },
    };

    try {
      var res = await axios.post(
        `http://localhost:8000/api/orders`,
        bodyParams,
        config
      );

      Log({ res });
      Log({ bodyParams });
      Log({ res });

      console.log("access_token", cookies.get("access_token"));
      console.log("abc", res.data, res.data.order);
      return { order: res.data.order };
    } catch (error) {
      if (error && error.response) {
        console.log(error.response.data);
      }
      return { order: "error" };
    }
  };

  const updateCart = () => {
    orderList.forEach((item) => {
      var index = cartStorage.list.findIndex(
        (elm) =>
          elm.product_id === item.item.product_id &&
          elm.optionValue === item.item.optionValue
      );

      Log({ index });
      cartStorage.list.splice(index, 1);
    });

    dispatch(update({ cart: cartStorage.list }));

    console.log("update cart", cartStorage.list);
    Log({ orderList });
  };

  return (
    <div className="cart_side">
      <div className="card">
        <div className="row">
          <List orderList={orderList} totalPriceHandle={totalPriceHandle} />
          <Summary
            totalOriginalPrice={totalOriginalPrice}
            purchase={purchase}
            setTotalOriginalPrice={setTotalOriginalPrice}
            orderList={orderList}
            recordCode={recordCode}
            setRecordCode={setRecordCode}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            tax={tax}
            setTax={setTax}
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;
