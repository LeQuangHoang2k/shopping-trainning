import React, { useEffect, useState } from "react";
import queryString from "query-string";

import Product from "./Product/Product";
import ProductDetail from "./ProductDetail/ProductDetail";

import "./Layout.css";
import Paginate from "../Pagination/Paginate";

function Layout(props) {
  const [mainComponent, setMainComponent] = useState(null);

  const { name, id } = queryString.parse(window.location.search);

  useEffect(() => {
    if (id && id !== "") {
      setMainComponent(<ProductDetail />);
    } else {
      setMainComponent(
        <>
          <Product />
          <Paginate />
        </>
      );
    }

    return () => {
      setMainComponent(null); // This worked for me
    };
  }, []);

  return <div className="layout_wrapper">{mainComponent}</div>;
}

export default Layout;
