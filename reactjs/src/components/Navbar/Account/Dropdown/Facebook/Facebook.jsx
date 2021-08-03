import React from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import Alert from "../../../../../features/Alert";
import Cookies from "universal-cookie";

import "./Facebook.css";

function Facebook(props) {
  const cookies = new Cookies();

  const responseFacebook = async (response) => {
    var { id, email, name, picture } = await response;
    var picture = await picture.data.url;
    console.log("Google infor: ", response, picture, typeof parseInt(id));

    let bodyParams = await {
      // facebook_id: parseInt(id),
      facebook_id: parseInt(id),
      email,
      name,
      picture,
    };

    console.log(bodyParams);

    const can_login = await loginFacebook(bodyParams);
    if (can_login) return window.location.reload();
    console.log("can_login", can_login);

    const is_exist = await checkExistEmail(bodyParams);
    if (typeof is_exist === "undefined") return;
    console.log("is_exist", is_exist);

    if (!is_exist) {
      //api login da~ auto register r
    } else {
      const answer = window.confirm(
        "tai khoan nay da duoc dang ki, do co phai ban ko ?."
      );

      bodyParams["is_duplicate"] = answer;
      console.log("check body", bodyParams);

      await registerFacebook(bodyParams);
    }

    // if (!can_login) {

    // if (is_exist) {
    //   var is_duplicate = window.confirm("Tài khoản của bạn đã được đăng kí. Đó có phải là bạn ?.");
    // }

    //   if (is_duplicate && typeof is_duplicate === "boolean")
    //     bodyParams["is_duplicate"] = await is_duplicate;
    //   await registerFacebook(bodyParams);
    // }
  };

  const loginFacebook = async (bodyParams) => {
    console.log("loginFacebook");
    try {
      const res = await axios.post(
        "http://localhost:8000/api/login-facebook",
        bodyParams
      );

      console.log("php loginFacebook: ", res.data);

      await saveCookie(res.data);

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

  const saveCookie = (data) => {
    const { access_token, token_type, expires_in, user } = data;
    console.log("avc", access_token, token_type, expires_in, user);

    cookies.set("user", user, {
      path: "/",
      maxAge: expires_in,
    });

    cookies.set("access_token", access_token, {
      path: "/",
      maxAge: expires_in,
    });

    cookies.set("token_type", token_type, {
      path: "/",
      maxAge: expires_in,
    });
  };

  const checkExistEmail = async (bodyParams) => {
    console.log("checkExistEmail", bodyParams);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/register-facebook",
        bodyParams
      );
      console.log("res", res);

      const { user, message_duplicate } = await res.data;

      if (user) {
        Alert({ success: res.data.message });
        console.log("đã tạo thành công");
        await saveCookie(res.data);
        window.location.reload();
        return;
      }

      // console.log("message_duplicate", message_duplicate);
      // if (typeof message_duplicate === "undefined") return false;

      return true;
    } catch (error) {
      console.log("error exist email", error.response.data);
      return;
    }
  };

  const registerFacebook = async (bodyParams) => {
    console.log("register");
    try {
      var res = await axios.post(
        "http://localhost:8000/api/register-facebook",
        bodyParams
      );

      console.log("res", res.data);

      Alert({ success: res.data.message });

      await saveCookie(res.data);
      // window.location.reload();
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
