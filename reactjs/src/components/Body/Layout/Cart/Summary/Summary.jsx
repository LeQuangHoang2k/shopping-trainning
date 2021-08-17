import React, { useState } from "react";

function Summary(props) {
  const { total, purchase } = props;

  const [showLabel, setShowLabel] = useState(true);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const checkCode = (e) => {
    var value = e.target.value.length;

    switch (value) {
      case 0: {
        setShowLabel(true);
        setFail(false);
        setSuccess(false);
        break;
      }

      case 10: {
        setShowLabel(false);
        setFail(false);
        setSuccess(true);
        break;
      }

      default:
        setShowLabel(false);
        setFail(true);
        setSuccess(false);
        break;
    }
  };

  const getCode=()=>{
    
  }

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
        <button className="btn" onClick={purchase}>
          Purchase
        </button>
      </div>
    </div>
  );
}

export default Summary;
