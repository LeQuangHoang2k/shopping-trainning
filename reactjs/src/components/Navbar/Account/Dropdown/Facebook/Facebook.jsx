import React from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import Alert from "../../../../../features/Alert";

import "./Facebook.css";

function Facebook(props) {
  const responseFacebook = async (response) => {
    try {
      var { id, email, name, picture } = response;
      var picture = picture.data.url;
      console.log(response, picture);

      let formData = {
        facebook_id: id,
        email,
        name,
        picture,
      };

      console.log(formData);

      //input

      //db

      const res = await axios.post(
        "http://localhost:8000/api/login-facebook",
        formData
      );

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
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);

      const { data, meta } = await error.response.data;
      console.log("meta", meta);
      const { errors } = await meta;
      console.log("errors", errors);
      console.log("error is", errors[Object.keys(errors)[0]]);

      Alert({ error: errors[Object.keys(errors)[0]] });

      //   alert("")
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
