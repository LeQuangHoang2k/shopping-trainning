import React from "react";

import Account from "./Account/Account";
import Cart from "./Cart/Cart";
import Search from "./Search/Search";

import "./Navbar.css";

function Navbar(props) {
    return (
        <nav className="navbar_wrapper">
            <Search/>
            <Account />
            <Cart />
        </nav>
    );
}

export default Navbar;
