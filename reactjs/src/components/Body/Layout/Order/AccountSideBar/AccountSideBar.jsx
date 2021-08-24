import React from "react";
import "./AccountSideBar.css";
import AccountSvg from "./svg/AccountSvg";

function AccountSideBar(props) {
  return (
    <div>
      <div className="account_sidebar">
        {/* {} */}
        <div className="wrapper">
          <a href="abc" className="sidebar_item">
            <AccountSvg />
            <span>Thông tin tài khoản</span>
          </a>
          <a href="abc" className="sidebar_item">
            <AccountSvg />
            <span>Thông báo của tôi</span>
          </a>
          <a href="abc" className="sidebar_item">
            <AccountSvg />
            <span>Quản lý đơn hàng</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AccountSideBar;
