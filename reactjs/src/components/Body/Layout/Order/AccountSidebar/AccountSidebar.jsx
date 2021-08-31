import React from "react";
import "./AccountSidebar.css";
import {
  Address,
  BillingInformation,
  BuyLater,
  FavoriteProducts,
  Information,
  MyComment,
  Notification,
  OrderManagement,
  Question,
  ReviewOrders,
  ViewedProducts,
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
            <span>Account information</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <Notification />
            <span>Notification</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <OrderManagement />
            <span>Order Management</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <Address />
            <span>Address</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <BillingInformation />
            <span>Billing information</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <img
              className="sidebar_icon"
              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/review-2.svg"
            />
            <span>Review orders</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <ViewedProducts />
            <span>Viewed Products</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <FavoriteProducts />
            <span>Favorite products</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <BuyLater />
            <span>Buy later</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <MyComment />
            <span>My comnent</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <Question />
            <span>Q & A</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <img
              className="sidebar_icon"
              src="https://salt.tikicdn.com/ts/upload/5b/70/af/ac0eacaa8ec6738ac474f7bbe767bd75.png"
            />
            <span>Thông tin TikiNOW</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <img
              className="sidebar_icon"
              src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/coupon_code.svg"
            />
            <span>Mã giảm giá</span>
          </a>
          <a href="/orders" className="sidebar_item">
            <img
              className="sidebar_icon"
              srcSet="https://salt.tikicdn.com/ts/upload/b5/33/14/09096979a40d25a2ad3976e3809ceb78.png 2x, https://salt.tikicdn.com/ts/upload/4a/d4/da/77fe4fd0c771088f7794ba3ce66782eb.png 1x"
            />
            <span>Coin managent </span>
          </a>
          <a href="/orders" className="sidebar_item">
            <img
              className="sidebar_icon"
              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/bookcare.svg"
            />
            <span>My BookCare</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AccountSidebar;
