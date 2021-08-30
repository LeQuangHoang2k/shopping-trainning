import React from "react";

import Login from "./Login/Login";
import Register from "./Register/Register";
import Facebook from "./Facebook/Facebook";
import Google from "./Google/Google";

import "./Dropdown.css";

function Dropdown(props) {
    return (
        <div className="account_dropdown">
            {/* Đăng nhập */}
            <Login />
            {/* Đăng kí */}
            <Register />
            {/* Facebook */}
            <Facebook />
            {/* Google */}
            <Google />
        </div>
    );
}

export default Dropdown;
