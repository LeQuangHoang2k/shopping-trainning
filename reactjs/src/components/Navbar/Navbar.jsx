import React, { useEffect } from "react";

import Account from "./Account/Account";
import Cart from "./Cart/Cart";
import Search from "./Search/Search";

import "./Navbar.css";
import axios from "axios";
import Alert from "../../features/Alert";

function Navbar(props) {
  useEffect(() => {
    const testAPI = async () => {
      const res = await axios.get("http://localhost:8000/api/test");
      // if (!res) {
      //   alert("abc");
      //   Alert({ message: "test fail" });
      // }
      // const resJSON = JSON.parse(res);
      console.log(res);
    };

    testAPI();
  }, []);

  return (
    <nav className="navbar_wrapper">
      <Search />
      <Account />
      <Cart />
    </nav>
  );
}

export default Navbar;
