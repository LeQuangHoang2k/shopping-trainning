import React, { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";

import "./ProductDetail.css";
import Alert from "../../../../features/Alert";

function ProductDetail(props) {
  const [active, setActive] = useState(0);
  const [activePicture, setActivePicture] = useState(0);
  const [product, setProduct] = useState([]);
  const [options, setOptions] = useState([]);
  const [optionId, setOptionId] = useState(0);
  const [picture, setPicture] = useState("");
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [test, setTest] = useState([
    {
      image:
        "https://salt.tikicdn.com/cache/w444/ts/product/ea/2b/1a/213365920de2a1867909f9810d8465b0.jpg",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/w444/ts/product/79/d8/5c/5eae9e43e50c88af8b0b61aaeea146fa.jpg",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/w444/ts/product/0f/4a/19/e2c1e692c76e5aeb99baa2dcef13cdcb.jpg",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/w444/ts/product/f8/72/39/6a8b87506acc84044ff40da00f1b9ec7.jpg",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/w444/ts/product/e1/66/c2/47859ea06eb4b00ad41bbe81636e4373.jpg",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/w444/ts/product/81/73/6c/e3220a1f860b8611cfc0e7f78d515fbf.jpg",
    },
  ]);

  const { id } = queryString.parse(window.location.search);

  var formData = {
    product_id: product.id,
    price: price,
    count,
    option_id: optionId,
  };

  useEffect(() => {
    fetchProduct();
    console.log(test);
    return () => {
      setProduct([]);
      setOptions([]);
      setCart([]);

      setPrice(0);
      setCount(1);
      setOptionId(0);
      setActive(0);

      formData = {};
    };
  }, []);

  const fetchProduct = async () => {
    var res = null;

    if (id && id !== "") {
      console.log("id là: ", id);

      res = await axios.get(`http://localhost:8000/api/products?id=${id}`);
    } else {
      res = await axios.get("http://localhost:8000/api/products");
    }

    console.log("res", res.data.data[0]);
    const productsReturn = await res.data.data[0];

    console.log("php: ", productsReturn);

    setProduct(productsReturn);
    setOptions(productsReturn.options);
    setActive(productsReturn.options[0].id);

    setPrice(productsReturn.price);
    setOptionId(productsReturn.options[0].id);
  };

  const changePicture = (image) => {
    // Alert({ message: "đã bấm" });
    setPicture(image);
  };

  const updateOption = (option) => {
    setPrice(option.price);
    setOptionId(option.id);
    setActive(option.id);
  };

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    if (count === 1) return Alert({ warning: "Can't reduce any more" });

    setCount(count - 1);
  };

  const addCart = () => {
    validateCart();
    saveCart();
  };

  const validateCart = () => {
    if (price <= 0)
      return Alert({
        warning: "Can't add to cart because price isn't valid.",
      });

    if (count <= 0)
      return Alert({
        warning: "Can't add to cart because count isn't valid.",
      });

    if (optionId <= 0)
      return Alert({
        warning: "Can't add to cart because option name isn't valid.",
      });
  };

  const saveCart = () => {
    Alert({ message: "save thành công" });

    console.log("formData: ", formData);
    console.log("cart", cart);

    cart.push({ order: formData });
    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("cart", cart);

    setCount(1);
  };

  return (
    <div>
      <div className="productDetail_left">
        <div className="productDetail_left_main">
          <img src={picture} className="productDetail_left_image" alt="Image" />
        </div>
        <div className="productDetail_left_list">
          {/* <img
            className="productDetail_sub_image"
            src="https://salt.tikicdn.com/cache/w64/ts/product/ea/2b/1a/213365920de2a1867909f9810d8465b0.jpg"
            alt=""
            onClick={changePicture}
          /> */}
          {test.map((item) => {
            return (
              <img
                className="productDetail_sub_image"
                src={item.image}
                alt={item.image}
                onClick={() => changePicture(item.image)}
              />
            );
          })}
          {/* <img
            className="productDetail_sub_image"
            src="https://salt.tikicdn.com/cache/w64/ts/product/79/d8/5c/5eae9e43e50c88af8b0b61aaeea146fa.jpg"
            alt=""
          />
          <img
            className="productDetail_sub_image"
            src="https://salt.tikicdn.com/cache/w64/ts/product/0f/4a/19/e2c1e692c76e5aeb99baa2dcef13cdcb.jpg"
            alt=""
          />
          <img
            className="productDetail_sub_image"
            src="https://salt.tikicdn.com/cache/w64/ts/product/f8/72/39/6a8b87506acc84044ff40da00f1b9ec7.jpg"
            alt=""
          />
          <img
            className="productDetail_sub_image"
            src="https://salt.tikicdn.com/cache/w64/ts/product/e1/66/c2/47859ea06eb4b00ad41bbe81636e4373.jpg"
            alt=""
          />
          <img
            className="productDetail_sub_image"
            src="https://salt.tikicdn.com/cache/w64/ts/product/81/73/6c/e3220a1f860b8611cfc0e7f78d515fbf.jpg"
            alt=""
          /> */}
        </div>
      </div>
      <div className="productDetail_right">
        <div className="productDetail_right_title">
          {/* Điện Thoại iPhone 12 Pro 128GB - Hàng Chính Hãng */}
          {product.name}
        </div>
        <div className="productDetail_right_price">
          {parseInt(price).toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </div>

        <div className="productDetail_right_color">
          <div className="option_color">
            <img
              src="https://salt.tikicdn.com/cache/w444/ts/product/86/dd/0c/8948ec0e37381d80d7daf5f8c24062ed.jpg"
              className="option_picture"
              alt="Image"
            />
            <span className="option_text">Black</span>
          </div>
          <div className="option_color">
            <img
              src="https://salt.tikicdn.com/cache/w444/ts/product/27/55/4e/de17f04656c5cbfd86eb49dbbfb3fe3a.jpg"
              className="option_picture"
              alt="Image"
            />
            <span className="option_text">Silver</span>
          </div>
        </div>

        <div className="productDetail_right_ram" id="option_wrapper ">
          {options.map((option) => {
            return (
              <button
                key={option.id}
                type="button"
                className={
                  active === option.id ? "option_ram active" : "option_ram"
                }
                onClick={() => updateOption(option)}
              >
                {option.value}
              </button>
            );
          })}
        </div>

        <p className="option_amount_title">Amount:</p>

        <div className="option_amount">
          <button type="button" className="option_decrease" onClick={Decrease}>
            -
          </button>
          <button className="option_count"> {count} </button>
          <button type="button" className="option_increase" onClick={Increase}>
            +
          </button>
        </div>

        <button type="button" className="option_choose" onClick={addCart}>
          Add to Cart
        </button>

        <div className="productDetail_description">
          <span className="productDetail_text">{product.description}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
