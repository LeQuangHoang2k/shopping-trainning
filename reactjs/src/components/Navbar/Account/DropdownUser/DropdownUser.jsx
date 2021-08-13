import React from "react";

import Logout from "./Logout/Logout";
import Order from "./Order/Order";

import "./DropdownUser.css";

function DropdownUser(props) {
  return (
    <div className="account_dropdown">
      <Logout />

      <Order />
    </div>
  );
}

export default DropdownUser;
