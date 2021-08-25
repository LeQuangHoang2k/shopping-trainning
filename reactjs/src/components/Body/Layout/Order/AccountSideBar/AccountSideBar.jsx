import React from "react";
import "./AccountSidebar.css";
// import Information from "./svg/Information";
import {
  Address,
  BillingInformation,
  Information,
  Notification,
  OrderManagement,
} from "./svg/AccountSvg";

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
            <Information />
            <span>Thông tin tài khoản</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <Notification />
            <span>Thông báo của tôi</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <OrderManagement />
            <span>Quản lý đơn hàng</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <Address />
            <span>Số địa chỉ</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <BillingInformation />
            <span>Thông tin thanh toán</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <Information />
            <span>Nhận xét sản phẩm đã mua</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <Information />
            <span>Sản phẩm bạn đã xem</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <Information />
            <span>Sản phẩm yêu thích</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <Information />
            <span>Sản phẩm mua sau</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <Information />
            <span>Nhận xét của tôi</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <Information />
            <span>Hỏi đáp</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <Information />
            <span>Thông tin TikiNOW</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <Information />
            <span>Mã giảm giá</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <Information />
            <span>Quản lý Tiki Xu của tôi</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <Information />
            <span>BookCare của tôi</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AccountSidebar;
