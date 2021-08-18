import React, { useEffect, useState } from "react";
import axios from "axios";
import Alert from "../../../../../features/Alert";
import { Log } from "../../../../../features/Log";

function Summary(props) {
  const {
    totalOriginalPrice,
    setTotalOriginalPrice,
    recordCode,
    setRecordCode,
    purchase,
    orderList,
    totalPrice,
    setTotalPrice,tax, setTax
  } = props;

  const [showLabel, setShowLabel] = useState(true);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [code, setCode] = useState("");

  const [discountPrice, setDiscountPrice] = useState(0);

  useEffect(() => {
    Log({ code });
    Log({ recordCode });
    Log({ totalOriginalPrice });
  }, [code, recordCode, totalOriginalPrice]);

  const checkCode = async (e) => {
    if (orderList.length === 0)
      return Alert({ warning: "Please check your order" });

    var value = e.target.value.length;

    switch (value) {
      case 0: {
        setCode("");

        setShowLabel(true);
        setFail(false);
        setSuccess(false);

        setRecordCode({});

        setDiscountPrice(0);
        setTotalPrice(onTotalPriceHandle);

        break;
      }

      case 10: {
        await setCode(e.target.value);

        setShowLabel(false);
        setFail(false);
        setSuccess(true);

        await getCode(e.target.value);
        setTotalPrice(onTotalPriceHandle);

        break;
      }

      default: {
        setCode(e.target.value);

        setShowLabel(false);
        setFail(true);
        setSuccess(false);

        setRecordCode({});
        setDiscountPrice(0);
        setTotalPrice(onTotalPriceHandle);

        break;
      }
    }
  };

  const getCode = async (value) => {
    alert(value);

    try {
      const res = await axios.get(
        `http://localhost:8000/api/discounts?code=${value}`
      );
      const { data } = res.data;
      console.log("code record: ", data[0]);
      setRecordCode(data[0]);
      setDiscountPrice(parseFloat(data[0].price));
      console.log(data[0].price, parseFloat(data[0].price));
    } catch (error) {
      setSuccess(false);
      setFail(true);
    }
  };

  const pay = async () => {
    var result = await purchase();

    if (!result) return alert("tạch");
    setCode("");
    setTotalOriginalPrice(0.0);

    setShowLabel(true);
    setSuccess(false);
    setFail(false);
  };

  const onFormatPriceHandle = (value) => {
    return parseFloat(value).toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 3,
    });
  };

  function onTotalPriceHandle() {
    var priceAfterDiscount = totalOriginalPrice - discountPrice;
    var priceAfterTax = priceAfterDiscount * (1 - 0.1);
    return priceAfterTax;
    // return (totalOriginalPrice - discountPrice) * 0.9;
  }

  return (
    <div className="col-md-4 summary">
      <div>
        <h5>
          <b>Summary</b>
        </h5>
      </div>
      <hr />

      <div>
        <p>GIVE CODE</p>

        <div className="div_code">
          <input id="code" type="text" onChange={checkCode} value={code} />
          <label
            style={{ display: showLabel ? "block" : "none" }}
            htmlFor="code"
            className="label_code"
          ></label>
        </div>
      </div>

      <div
        style={{
          padding: "2vh 0",
        }}
      >
        <div
          style={{
            display: success ? "block" : "none",
            color: "lightgreen",
          }}
          className="col"
        >
          Validated!
        </div>
        <div
          className="col"
          style={{
            display: fail ? "block" : "none",
            color: "red",
          }}
        >
          Not Validated!
        </div>
      </div>

      <div
        className="row"
        style={{
          padding: "2vh 0",
        }}
      >
        <div className="col">Total original price</div>
        <div className="col text-right">
          {totalOriginalPrice > 0
            ? onFormatPriceHandle(totalOriginalPrice)
            : "0 VND"}
        </div>
      </div>

      <div
        className="row"
        style={{
          padding: "2vh 0",
        }}
      >
        <div className="col">Discount price</div>
        <div className="col text-right">
          {discountPrice > 0 ? onFormatPriceHandle(discountPrice) : "0 VND"}
        </div>
      </div>

      <div
        className="row"
        style={{
          padding: "2vh 0",
        }}
      >
        <div className="col">Tax</div>
        <div className="col text-right">{tax} %</div>
      </div>

      <div
        className="row"
        style={{
          padding: "2vh 0",
        }}
      >
        <div className="col">Total Price</div>
        <div className="col text-right">
          {onTotalPriceHandle() > 0
            ? onFormatPriceHandle(onTotalPriceHandle())
            : "0 VND"}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button className="btn" onClick={pay}>
          Purchase
        </button>
      </div>
    </div>
  );
}

export default Summary;
