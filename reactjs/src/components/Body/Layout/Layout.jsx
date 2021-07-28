import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import queryString from "query-string";

import Product from "./Product/Product";
import ProductDetail from "./ProductDetail/ProductDetail";

import "./Layout.css";
import Paginate from "./Product/Pagination/Paginate";

function Layout(props) {
  const [mainComponent, setMainComponent] = useState(null);

  // const { name, id } = queryString.parse(window.location.search);
  const { name } = queryString.parse(window.location.search);
  const { id } = useParams();

  useEffect(() => {
    if (id && id !== "") {
      setMainComponent(<ProductDetail />);
    } else {
      setMainComponent(
        <>
          <Product />
          {/* <Paginate /> */}
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
