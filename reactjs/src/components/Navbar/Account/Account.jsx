import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

import Dropdown from "./Dropdown/Dropdown";
import DropdownUser from "./DropdownUser/DropdownUser";
import Alert from "../../../features/Alert";

import "./Account.css";

// import AccountIcon from "/images/AccountIcon.png";
// import AccountArrow from "/images/AccountArrow.png";

function Account(props) {
  const cookies = new Cookies();
  const [user, setUser] = useState(cookies.get("user"));

  // const [accountImage, setAccountImage] = useState("/images/AccountIcon.png");
  useEffect(() => {
    updateAccountUI();
    console.log("user", user);
  }, []);

  const updateAccountUI = () => {
    if (!user || user.length === 0)
      return setTimeout(() => {
        Alert({
          message:
            "Vui lòng đăng nhập để nhận ưu đãi khi săn sale Tiki 8/8 nhé !",
        });
      }, 2000);
  };

  return (
    <div className="account_wrapper">
      <div className="account_content">
        <img
          src={
            user && user.picture && user.picture !== ""
              ? user.picture
              : "/images/AccountIcon.png"
          }
          className="account_image"
          alt="Image"
        />
        <div className="account_name">
          <span className="account_title">
            {user && user.name && user.name !== "" ? user.name : "My Account"}
          </span>
        </div>
        <img
          src="/images/AccountArrow.png"
          className="account_arrow"
          alt="Image"
        />

        {user ? <DropdownUser /> : <Dropdown />}
      </div>
    </div>
  );
}

export default Account;
