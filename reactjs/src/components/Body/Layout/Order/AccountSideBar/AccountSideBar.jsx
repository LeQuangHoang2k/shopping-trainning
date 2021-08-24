import React from "react";
import "./AccountSidebar.css";
import AccountSvg from "./svg/AccountSvg";

function AccountSidebar(props) {
  return (
    <div>
      <div className="account_sidebar">
        {/* {} */}
        <div className="wrapper">
          <div className="sidebar_header">
            <img
              className="sidebar_image"
              src="https://salt.tikicdn.com/desktop/img/avatar.png"
              alt="123"
            />
            <div className="title">
              <div>Account of</div>
              <div>
                <strong>Hoàng</strong>
              </div>
            </div>
          </div>
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

export default AccountSidebar;
