import React, { useEffect, useState } from "react";
import queryString from "query-string";

import Product from "./Product/Product";
import ProductDetail from "./ProductDetail/ProductDetail";

import "./Layout.css";

function Layout(props) {
    const [mainComponent, setMainComponent] = useState(null);

    const { name, product_id } = queryString.parse(window.location.search);

    useEffect(() => {
        if (product_id && product_id !== "") {
            setMainComponent(<ProductDetail />);
        } else {
            setMainComponent(<Product />);
        }

        return () => {
            setMainComponent(null); // This worked for me
        };
    }, []);

    return <div className="layout_wrapper">{mainComponent}</div>;
}

export default Layout;
