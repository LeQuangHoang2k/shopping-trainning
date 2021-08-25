import React from "react";
import "./AccountSidebar.css";
import AccountSvg from "./svg/AccountSvg";

function AccountSidebar(props) {
  return (
    <div>
      <div className="account_sidebar">
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
          <a href="/orders" className="sidebar_item">
            <AccountSvg />
            <span>Thông tin tài khoản</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <AccountSvg />
            <span>Thông báo của tôi</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <AccountSvg />
            <span>Quản lý đơn hàng</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <AccountSvg />
            <span>Số địa chỉ</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <AccountSvg />
            <span>Thông tin thanh toán</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <AccountSvg />
            <span>Nhận xét sản phẩm đã mua</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <AccountSvg />
            <span>Sản phẩm bạn đã xem</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <AccountSvg />
            <span>Sản phẩm yêu thích</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <AccountSvg />
            <span>Sản phẩm mua sau</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <AccountSvg />
            <span>Nhận xét của tôi</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <AccountSvg />
            <span>Hỏi đáp</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <AccountSvg />
            <span>Thông tin TikiNOW</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <AccountSvg />
            <span>Mã giảm giá</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <AccountSvg />
            <span>Quản lý Tiki Xu của tôi</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <AccountSvg />
            <span>BookCare của tôi</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AccountSidebar;
