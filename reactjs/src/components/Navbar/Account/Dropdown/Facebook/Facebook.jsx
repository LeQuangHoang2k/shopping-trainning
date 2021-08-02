import React from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import Alert from "../../../../../features/Alert";

import "./Facebook.css";

function Facebook(props) {
  const responseFacebook = async (response) => {
    var { id, email, name, picture } = await response;
    var picture = await picture.data.url;
    console.log("gg: ", response, picture, typeof parseInt(id));

    let bodyParams = await {
      // facebook_id: parseInt(id),
      facebook_id: parseInt(id),
      email,
      name,
      picture,
    };

    console.log(bodyParams);

    const can_login = await loginFacebook(bodyParams);
    if (!can_login) {
      console.log("can_login", can_login);
      const is_exist = await checkExistEmail(bodyParams);
      console.log("is_exist", is_exist);
      if (is_exist) {
        var is_duplicate = window.confirm("Tài khoản của bạn đã được đăng kí. Đó có phải là bạn ?.");
      }

      
      //   if (is_duplicate && typeof is_duplicate === "boolean")
      //     bodyParams["is_duplicate"] = await is_duplicate;
      //   await registerFacebook(bodyParams);
    }
  };

  const loginFacebook = async (bodyParams) => {
    console.log("loginFacebook");
    try {
      const res = await axios.post(
        "http://localhost:8000/api/login-facebook",
        bodyParams
      );

      console.log("res33", res);
      // const { } = await res.data;
      return true;
    } catch (error) {
      const { data, meta } = await error.response.data;
      console.log("meta", meta);
      const { errors } = await meta;
      console.log("errors", errors);
      console.log("error is", errors[Object.keys(errors)[0]]);

      if (errors[Object.keys(errors)[0]] == "facebook id not existed")
        return false;
      // console.log(
      //   errors[Object.keys(errors)[0]] == "facebook id not existed"
      // );
    }
  };

  const checkExistEmail = async (bodyParams) => {
    console.log("checkExistEmail");
    try {
      const res = await axios.post(
        "http://localhost:8000/api/register-facebook",
        bodyParams
      );
      console.log("res", res);
      const { message_duplicate } = await res.data;

      return true;
    } catch (error) {
      console.log("error exist email", error.response.data);
      return false;
    }
  };

  const registerFacebook = async (bodyParams) => {
    console.log("register");
    try {
      console.log("body", bodyParams);

      var res = await axios.post(
        "http://localhost:8000/api/register-facebook",
        bodyParams
      );

      console.log("res", res);

      Alert({ success: res.data.message });
      console.log("php: ", res);
    } catch (error) {
      console.log("error registerFackbook", error.response.data);
    }
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

// console.log(error.response.data);
// console.log(error.response.status);
// console.log(error.response.headers);

// const { data, meta } = await error.response.data;
// console.log("meta", meta);
// const { errors } = await meta;
// console.log("errors", errors);
// console.log("error is", errors[Object.keys(errors)[0]]);

// if (errors[Object.keys(errors)[0]] == "facebook id not existed") {
//   registerFacebook(bodyParams);
// }
