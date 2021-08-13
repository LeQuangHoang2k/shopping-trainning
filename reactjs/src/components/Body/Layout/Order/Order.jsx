import React from "react";
import "./Order.css";

function Order(props) {
  return (
    <div className="order_side">
      <div className="cart_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cart_container">
                {/* <div className="cart_title">
                  Shopping Cart<small> (1 item in your cart) </small>
                </div> */}
                <div className="cart_items">
                  <ul className="cart_list">
                    <li className="cart_item clearfix">
                      <div className="cart_item_image">
                        <img src="https://i.imgur.com/qqBRWD5.jpg" alt="" />
                      </div>
                      <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                        <div className="cart_item_name cart_info_col">
                          <div className="cart_item_title">Name</div>
                          <div className="cart_item_text">Samsung C7 Pro</div>
                        </div>
                        <div className="cart_item_color cart_info_col">
                          <div className="cart_item_title">Color</div>
                          <div className="cart_item_text">
                            {/* <span style="background-color:#999999;"></span> */}
                            Silver
                          </div>
                        </div>
                        <div className="cart_item_quantity cart_info_col">
                          <div className="cart_item_title">Quantity</div>
                          <div className="cart_item_text">1</div>
                        </div>
                        <div className="cart_item_price cart_info_col">
                          <div className="cart_item_title">Price</div>
                          <div className="cart_item_text">₹22000</div>
                        </div>
                        <div className="cart_item_total cart_info_col">
                          <div className="cart_item_title">Total</div>
                          <div className="cart_item_text">₹22000</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/*  */}

                <div className="cart_items">
                  <ul className="cart_list">
                    <li className="cart_item clearfix">
                      <div className="cart_item_image">
                        <img src="https://i.imgur.com/qqBRWD5.jpg" alt="" />
                      </div>
                      <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                        <div className="cart_item_name cart_info_col">
                          <div className="cart_item_title">Name</div>
                          <div className="cart_item_text">Samsung C7 Pro</div>
                        </div>
                        <div className="cart_item_color cart_info_col">
                          <div className="cart_item_title">Color</div>
                          <div className="cart_item_text">
                            {/* <span style="background-color:#999999;"></span> */}
                            Silver
                          </div>
                        </div>
                        <div className="cart_item_quantity cart_info_col">
                          <div className="cart_item_title">Quantity</div>
                          <div className="cart_item_text">1</div>
                        </div>
                        <div className="cart_item_price cart_info_col">
                          <div className="cart_item_title">Price</div>
                          <div className="cart_item_text">₹22000</div>
                        </div>
                        <div className="cart_item_total cart_info_col">
                          <div className="cart_item_title">Total</div>
                          <div className="cart_item_text">₹22000</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="cart_items">
                  <ul className="cart_list">
                    <li className="cart_item clearfix">
                      <div className="cart_item_image">
                        <img src="https://i.imgur.com/qqBRWD5.jpg" alt="" />
                      </div>
                      <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                        <div className="cart_item_name cart_info_col">
                          <div className="cart_item_title">Name</div>
                          <div className="cart_item_text">Samsung C7 Pro</div>
                        </div>
                        <div className="cart_item_color cart_info_col">
                          <div className="cart_item_title">Color</div>
                          <div className="cart_item_text">
                            {/* <span style="background-color:#999999;"></span> */}
                            Silver
                          </div>
                        </div>
                        <div className="cart_item_quantity cart_info_col">
                          <div className="cart_item_title">Quantity</div>
                          <div className="cart_item_text">1</div>
                        </div>
                        <div className="cart_item_price cart_info_col">
                          <div className="cart_item_title">Price</div>
                          <div className="cart_item_text">₹22000</div>
                        </div>
                        <div className="cart_item_total cart_info_col">
                          <div className="cart_item_title">Total</div>
                          <div className="cart_item_text">₹22000</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
