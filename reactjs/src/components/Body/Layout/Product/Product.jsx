import React, { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";

import "./Product.css";

function Product(props) {
  const [products, setProducts] = useState([]);

  const { name } = queryString.parse(window.location.search);

  useEffect(() => {
    fetchProduct();

    return () => {
      setProducts([]);
    };
  }, []);

  const fetchProduct = async () => {
    var res = null;

    if (name && name !== "") {
      res = await axios.post("/api/search-product", { name });
      console.log("name là: ", name);
    } else {
      res = await axios.get("http://localhost:8000/api/product");
    }

    const { data } = await res.data;

    console.log("php: ", data);

    // console.log(data.data);

    setProducts(data);
  };

  return (
    // <div></div>
    <div>
      {products.map((item) => {
        return (
          <a
            key={item.id}
            href={`/?product_id=${item.id}`}
            className="product_wrapper"
          >
            <div className="product_content">
              <img src={item.picture} className="product_image" alt="Image" />

              <span className="product_title">{item.name}</span>

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
