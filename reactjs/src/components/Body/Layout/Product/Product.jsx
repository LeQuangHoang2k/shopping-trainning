import React, { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";

import "./Product.css";

function Product(props) {
  const [products, setProducts] = useState([]);

  var { name, page } = queryString.parse(window.location.search);

  useEffect(() => {
    fetchProduct();

    return () => {
      setProducts([]);
    };
  }, []);

  const fetchProduct = async () => {
    var res = null;

    page = typeof page === "undefined" ? 1 : page;

    if (name && name !== "") {
      res = await axios.get(
        `http://localhost:8000/api/products?name=${name}&page=${page}`
      );
    } else {
      res = await axios.get(`http://localhost:8000/api/products?page=${page}`);
    }

    const { data } = await res.data;
    setProducts(data);
    console.log("php: ", data);
  };

  if (products.length === 0) {
    return (
      <center>
        <h1>{products.length === 0 ? "No matching results" : ""}</h1>
      </center>
    );
  }

  return (
    <div>
      {products.map((item) => {
        return (
          <a
            key={item.id}
            href={`/products?id=${item.id}`}
            className="product_wrapper"
          >
            <div className="product_content">
              <img src={item.picture} className="product_image" alt="Image" />

              <span className="product_title">
                {item.id} : {item.name}
              </span>

              <div>
                <span className="product_star">Đánh giá : 5 sao |</span>{" "}
                <span className="product_sold">Đã bán : 50</span>
              </div>

              <div>
                <span className="product_price">
                  {parseInt(item.price).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
                &nbsp;
                <span className="product_discount">-69%</span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Product;

// {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => {
//     return (
//         <a key={item} href="abc" className="product_wrapper">
//             <div className="product_content">
//                 <img
//                     src="https://salt.tikicdn.com/cache/280x280/ts/product/9a/2e/ef/b1ca821448463399a638394f9bc8a8b3.jpg"
//                     className="product_image"
//                     alt="Image"
//                 />

//                 <span className="product_title">
//                     Tai Nghe Bluetooth True Wireless Samsung Galaxy
//                     Buds + Plus - Hàng chính hãng
//                 </span>

//                 <div>
//                     <span className="product_star">
//                         Đánh giá : 5 sao |
//                     </span>{" "}
//                     <span className="product_sold">
//                         Đã bán : 50
//                     </span>
//                 </div>

//                 <div>
//                     <span className="product_price">
//                         1.390.000 đ
//                     </span>
//                     &nbsp;
//                     <span className="product_discount">-69%</span>
//                 </div>
//             </div>
//         </a>
//     );
// })}
