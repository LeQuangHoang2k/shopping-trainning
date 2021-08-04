import React from "react";
import { GoogleLogin } from "react-google-login";
import Alert from "../../../../../features/Alert";
import axios from "axios";

import "./Google.css";

function Google(props) {
  const google = async (resGG) => {
    const { email, googleId, imageUrl, name } = resGG.profileObj;
    console.log(resGG);

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
