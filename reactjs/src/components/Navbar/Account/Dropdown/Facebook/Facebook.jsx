import React from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import Alert from "../../../../../features/Alert";

import "./Facebook.css";

function Facebook(props) {
  const responseFacebook = async (response) => {
    try {
      const { id, email, name, picture } = response;
      const pictureURL = picture.data.url;
      console.log(response, pictureURL);

      let formData = {
        id,
        email,
        name,
        pictureURL,
      };

      console.log(formData);

      //input

      //db

      const res = await axios.post("http://localhost:8000/api/login-facebook", formData);

      const { data } = await res;

      Alert({ message: data.message });

      console.log("php: ", data);

      //main

      //res

      localStorage.setItem("account", JSON.stringify(data.account));
      let a = localStorage.getItem("account");

      a = JSON.parse(a);

      console.log(a);

      window.location.reload();
    } catch (error) {
      console.log(error.data);
    }
  };

  const submit = () => {
    console.log("đã bấm");
  };

  return (
    <FacebookLogin
      appId="4280930138626348"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      cssClass="account_facebook"
    />
  );
}

export default Facebook;
