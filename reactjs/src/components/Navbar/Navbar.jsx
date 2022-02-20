import React, { useEffect, useState } from "react";

import Logo from "./Logo/Logo";
import Account from "./Account/Account";
import Cart from "./Cart/Cart";
import Search from "./Search/Search";

import "./Navbar.css";
import axios from "axios";
import Alert from "../../features/Alert";

function Navbar(props) {
  const [image, setImage] = useState("/images/AccountIcon.png");

  // useEffect(() => {
  //   const testAPI = async () => {
  //     const res = await axios.get("http://localhost:8000/api/product");
  //     console.log(res);
  //   };

  //   testAPI();
  // }, []);

  return (
    <nav className="navbar_wrapper">
      <Logo />
      <Search />
      <Account />
      <Cart />
    </nav>
  );
}

export default Navbar;
