import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import Dropdown from "./Dropdown/Dropdown";
import DropdownUser from "./DropdownUser/DropdownUser";
import Alert from "../../../features/Alert";

import "./Account.css";

// import AccountIcon from "/images/AccountIcon.png";
// import AccountArrow from "/images/AccountArrow.png";

function Account(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [state, setState] = useState({});
  const [user, setUser] = useState(cookies["user"]);

  const [accountImage, setAccountImage] = useState("/images/AccountIcon.png");

  const [dropdownComponent, setDropdownComponent] = useState(<Dropdown />);

  useEffect(() => {
    updateAccountUI();
    console.log("user", user.email);

    return () => {
      setState({}); // This worked for me
    };
  }, []);

  const updateAccountUI = () => {
    if (!user || user.length === 0)
      return setTimeout(() => {
        Alert({
          message:
            "Vui lòng đăng nhập để nhận ưu đãi khi săn sale Tiki 8/8 nhé !",
        });
      }, 2000);

    setDropdownComponent(<DropdownUser />);
  };

  return (
    <div className="account_wrapper">
      <div className="account_content">
        <img
          src={
            user.picture && user.picture !== ""
              ? user.picture
              : "/images/AccountIcon.png"
          }
          className="account_image"
          alt="Image"
        />
        <div className="account_name">
          <span className="account_title">
            {user.name && user.name !== "" ? user.name : "My Account"}
          </span>
        </div>
        <img
          src="/images/AccountArrow.png"
          className="account_arrow"
          alt="Image"
        />

        {dropdownComponent}
      </div>
    </div>
  );
}

export default Account;
