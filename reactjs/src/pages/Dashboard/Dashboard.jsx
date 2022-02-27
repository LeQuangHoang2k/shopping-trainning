import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";

function Dashboard(props) {
  const cookies = new Cookies();
  const [user, setUser] = useState(cookies.get("user"));
  let history = useHistory();

  useEffect(() => {
    console.log("user is: ", user);
    if (!user || user.role !== "admin") history.push("/");
    return () => {};
  }, []);
  // product (them,sua,xoa)
  // user (them,sua,xoa,list)
  // discount (them,sua,xoa)
  // order
  // category
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div
        style={{
          width: "20%",
          height: "100vh",
          backgroundColor: "#122D4F",
          float: "left",
          color: "white",
        }}
      >
        123
      </div>
      <div
        style={{
          width: "80%",
          height: "100vh",
          backgroundColor: "#F5F5F4",
          float: "right",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "80px",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            paddingLeft: "50px",
            fontSize: "20px",
            fontFamily: "helvetica",
            fontWeight : "bold"
          }}
        >
          DashBoard
        </div>
        <div
          style={{ width: "100%", height: "auto", backgroundColor: "#F5F5F4" }}
        >
          <div
            style={{
              width: "1000px",
              height: "500px",
              backgroundColor: "white",
              margin: "auto",
              marginTop: "50px",
              borderRadius: "15px",
            }}
          >
            789
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
