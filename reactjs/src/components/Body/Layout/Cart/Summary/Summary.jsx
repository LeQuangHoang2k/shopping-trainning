import React, { useEffect, useState } from "react";
import axios from "axios";
import Alert from "../../../../../features/Alert";

function Summary(props) {
  const {
    totalOriginalPrice,
    purchase,
    setTotalOriginalPrice,
    orderList,
    recordCode,
    setRecordCode,
  } = props;

  const [showLabel, setShowLabel] = useState(true);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [code, setCode] = useState("");

  const [tax, setTax] = useState(10);

  useEffect(() => {
    console.log("code", code);
    console.log("recordCode", recordCode);
  }, [code]);

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
        break;
      }

      case 10: {
        await setCode(e.target.value);

        setShowLabel(false);
        setFail(false);
        setSuccess(true);

        await getCode(e.target.value);

        break;
      }

      default: {
        setCode(e.target.value);

        setShowLabel(false);
        setFail(true);
        setSuccess(false);

        setRecordCode({});
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

  const originalPrice = () => {
    return totalOriginalPrice > 0
      ? parseFloat(totalOriginalPrice).toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
          minimumFractionDigits: 3,
        })
      : "0 VND";
  };

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
        <div className="col text-right">{originalPrice()}</div>
      </div>

      <div
        className="row"
        style={{
          padding: "2vh 0",
        }}
      >
        <div className="col">Discount price</div>
        <div className="col text-right"></div>
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
        <div className="col text-right">{totalOriginalPrice}</div>
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
