import React from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import Alert from "../../../../../features/Alert";

import "./Facebook.css";

function Facebook(props) {
  const responseFacebook = async (response) => {
    var { id, email, name, picture } = await response;
    var picture = await picture.data.url;
    console.log(response, picture);

    let bodyParams = await {
      facebook_id: parseInt(id),
      email,
      name,
      picture,
    };

    console.log(bodyParams);

    // const result = await loginFacebook(bodyParams);
    // console.log(result);
    if (!(await loginFacebook(bodyParams))) {
      const { is_duplicate } = await checkExistEmail(bodyParams);
      if (typeof is_duplicate === "boolean")
        bodyParams["is_duplicate"] = await is_duplicate;
      await registerFacebook(bodyParams);
    }
  };

  const loginFacebook = async (bodyParams) => {
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
    try {
      const res = await axios.post(
        "http://localhost:8000/api/register-facebook",
        bodyParams
      );

      console.log("res", res);
      const { message_duplicate } = await res.data;
      var is_duplicate = await window.confirm(message_duplicate);

      return { is_duplicate };
    } catch (error) {
      console.log("error exist email", error.data);
      return null;
    }
  };

  const registerFacebook = async (bodyParams) => {
    try {
      console.log("body", bodyParams);

      var res = await axios.post(
        "http://localhost:8000/api/register-facebook",
        bodyParams
      );

      console.log("res", res);

      Alert({ success: res.data.message });
      console.log("php: ", res);
    } catch (error) {}
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
