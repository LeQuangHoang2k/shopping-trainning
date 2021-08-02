import React from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import Alert from "../../../../../features/Alert";

import "./Facebook.css";

function Facebook(props) {
  const responseFacebook = async (response) => {
    var { id, email, name, picture } = response;
    var picture = picture.data.url;
    console.log(response, picture);

    let bodyParams = {
      facebook_id: id,
      email,
      name,
      picture,
    };

    console.log(bodyParams);

    try {
      //input

      //db

      const res = await axios.post(
        "http://localhost:8000/api/login-facebook",
        bodyParams
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

      if (errors[Object.keys(errors)[0]] == "facebook id not existed") {
        registerFacebook(bodyParams);
      }

      // if (res.data.message_duplicate) {
      //   Alert({ error: res.data.message_duplicate });
      // }
      // console.log("register: ", res);
      // window.confirm("Press a button!");
    }
  };

  const registerFacebook = async (bodyParams) => {
    // alert(1234);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/register-facebook",
        bodyParams
      );
      console.log("res", res);

      if (res.data.message_duplicate) {
        Alert({ error: res.data.message_duplicate });
      }
      console.log("php: ", res);
    } catch (error) {}
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
