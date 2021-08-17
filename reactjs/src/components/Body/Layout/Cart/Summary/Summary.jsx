import React, { useEffect, useState } from "react";
import axios from "axios";

function Summary(props) {
  const { total, purchase, setTotal } = props;

  const [showLabel, setShowLabel] = useState(true);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [code, setCode] = useState("");
  const [recordCode, setRecordCode] = useState({});

  useEffect(() => {
    console.log("code", code);
    console.log("recordCode", recordCode);
  }, [code]);

  const checkCode = async (e) => {
    var value = e.target.value.length;

    switch (value) {
      case 0: {
        setCode("");

        setShowLabel(true);
        setFail(false);
        setSuccess(false);
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
      console.log("code record: ", res.data[0]);
      setRecordCode(res.data[0]);
    } catch (error) {
      setSuccess(false);
      setFail(true);
    }
  };

  const pay = async () => {
    var result = await purchase();

    if (!result) return alert("tạch");
    setCode("");
    setTotal(0.0);

    setShowLabel(true);
    setSuccess(false);
    setFail(false);
  };

  return (
    <div className="col-md-4 summary">
      <div>
        <h5>
          <b>Summary</b>
        </h5>
      </div>
      <hr />

      <form>
        <p>GIVE CODE</p>

        <div className="div_animation">
          <input id="code" onChange={checkCode} />
          <label
            style={{ display: showLabel ? "block" : "none" }}
            htmlFor="code"
          ></label>
        </div>
      </form>

      <div
        // className="row"
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
        <button className="btn" onClick={pay}>
          Purchase
        </button>
      </div>
    </div>
  );
}

export default Summary;
