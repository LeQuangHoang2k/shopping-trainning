import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import { useCookies } from "react-cookie";

import "./LoginModal.css";
import Alert from "./../../../../../../features/Alert";

function LoginModal(props) {
  const { show, handleClose } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);

  var formData = {
    email,
    password,
  };

  useEffect(() => {
    console.log("cookies", cookies["user"]);
    console.log("cookies", cookies["token"]);
  }, []);

  const login = async () => {
    //input

    if (!checkRequest()) return;

    console.log(checkRequest());

    //db
    try {
      const res = await axios.post("http://localhost:8000/api/login", formData);
      console.log("php: ", res);
      console.log("php: ", res.data);

      saveCookie(res.data);
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
    }
  };

  const checkRequest = () => {
    console.log(formData);

    if (!email || email.length < 5)
      return Alert({ warning: "Email not valid" });

    if (!password || password.length < 5)
      return Alert({ warning: "Password not valid" });

    return true;
  };

  const saveCookie = (data) => {
    const { access_token, token_type, expires_in, user } = data;
    console.log("avc", access_token, token_type, expires_in, user);
    setCookie("user", user, { path: "/" });
    setCookie("access_token", access_token, { path: "/" });
    setCookie("expires_in", expires_in, { path: "/" });
    setCookie("token_type", expires_in, { path: "/" });

    // setCookie('Password', pwd, { path: '/' });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={login}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
