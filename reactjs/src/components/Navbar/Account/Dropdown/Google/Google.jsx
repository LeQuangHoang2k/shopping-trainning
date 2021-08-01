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

    let formData = {
      google_id: googleId,
      email,
      name,
      picture: imageUrl,
    };

    console.log(formData);

    //db

    const res = await axios.post(
      "http://localhost:8000/api/login-google",
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
