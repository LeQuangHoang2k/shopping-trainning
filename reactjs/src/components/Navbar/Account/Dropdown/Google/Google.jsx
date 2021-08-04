import React from "react";
import { GoogleLogin } from "react-google-login";
import Alert from "../../../../../features/Alert";
import axios from "axios";

import "./Google.css";

function Google(props) {
  const google = async (res) => {
    const { email, googleId, imageUrl, name } =await res.profileObj;
    console.log(res);

    //input

    let bodyParams = {
      google_id: googleId,
      email,
      name,
      picture: imageUrl,
    };

    console.log(bodyParams);

    const can_login = await loginGoogle(bodyParams);
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

      await registerGoogle(bodyParams);
    }
  };

  const loginGoogle = async (bodyParams) => {
    console.log("loginGoogle");
    try {
      const res = await axios.post(
        "http://localhost:8000/api/login-google",
        bodyParams
      );

      console.log("php loginGoogle: ", res.data);

      await saveCookie(res.data);

      return true;
    } catch (error) {
      const { data, meta } = await error.response.data;
      console.log("meta", meta);
      const { errors } = await meta;
      console.log("errors", errors);
      console.log("error is", errors[Object.keys(errors)[0]]);

      if (errors[Object.keys(errors)[0]] == "google id not existed")
        return false;
    }
  };

  const checkExistEmail = async (bodyParams) => {
    console.log("checkExistEmail", bodyParams);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/register-google",
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

      return true;
    } catch (error) {
      console.log("error exist email", error.response.data);
      return;
    }
  };

  const googleFailure = (res) => {};

  return (
    <GoogleLogin
      clientId="70419162145-mmja2ctoulck83l2rnvod1cplispathp.apps.googleusercontent.com"
      onSuccess={google}
      onFailure={googleFailure}
      render={(props) => {
        return (
          <button
            type="button"
            className="fa fa-google account_google"
            onClick={props.onClick}
          >
            Login with Google
          </button>
        );
      }}
    />
    // <div className="account_google">Google</div>
  );
}

export default Google;
