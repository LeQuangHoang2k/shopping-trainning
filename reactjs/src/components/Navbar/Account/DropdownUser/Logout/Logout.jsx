import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Cookies from "universal-cookie";

import "./Logout.css";

function Logout(props) {
  const submit = () => {
    const cookies = new Cookies();
    cookies.remove("user");
    cookies.remove("access_token");
    cookies.remove("token_type");

    window.location.href = "/";
  };

  return (
    <>
      <Button variant="account_logout" onClick={submit}>
        Logout
      </Button>
    </>
  );
}

export default Logout;
