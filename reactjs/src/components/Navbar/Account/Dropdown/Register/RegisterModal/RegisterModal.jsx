import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import axios from "axios";

import Alert from "../../../../../../features/Alert";

import "./RegisterModal.css";

function RegisterModal(props) {
  const { show, handleClose } = props;

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  var bodyParams = {
    email,
    phone,
    password,
    confirm_password: confirmPassword,
  };

  const submit = async () => {
    //input

    if (!checkRequest()) return;

    console.log(checkRequest());

    console.log(bodyParams);

    // const can_create = await createAccount(bodyParams);
    // if (can_create) return window.location.reload();
    // console.log("can_create", can_create);

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

      await registerAccount(bodyParams);
    }

    //db
    // try {
    //   const res = await axios.post(
    //     "http://localhost:8000/api/register",
    //     bodyParams
    //   );

    //   const { data, meta } = await res;
    //   console.log("php: ", data);

    //   Alert({ success: "Try to login now" });

    //   window.location.reload();
    // } catch (error) {
    //   console.log(error.response.data);
    //   console.log(error.response.status);
    //   console.log(error.response.headers);

    //   const { data, meta } = await error.response.data;
    //   console.log("meta", meta);
    //   const { errors } = await meta;
    //   console.log("errors", errors);
    //   console.log("error is", errors[Object.keys(errors)[0]]);

    //   Alert({ error: errors[Object.keys(errors)[0]] });
    // }

    //res
    // handleClose();
    // window.location.reload();
  };

  const checkRequest = () => {
    console.log(bodyParams);

    if (!email || email.length < 5) {
      Alert({ warning: "Email not valid" });
      return false;
    }

    if (!phone || phone.length < 9) {
      Alert({ warning: "Phone not valid" });
      return false;
    }

    if (!password || password.length < 5) {
      Alert({ warning: "Password not valid" });
      return false;
    }

    if (password !== confirmPassword) {
      Alert({ warning: "Password not confirm" });
      return false;
    }

    return true;
  };

  const checkExistEmail = async (bodyParams) => {
    console.log("checkExistEmail", bodyParams);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/register",
        bodyParams
      );
      console.log("res", res);

      const { user, message_duplicate } = await res.data;

      if (user) {
        await Alert({ success: res.data.message });
        console.log("đã tạo thành công");
        // await saveCookie(res.data);
        window.location.reload();
        return;
      }

      return true;
    } catch (error) {
      console.log("error exist email", error.response.data);
      return;
    }
  };

  const registerAccount = async (bodyParams) => {
    console.log("register");
    try {
      var res = await axios.post(
        "http://localhost:8000/api/register",
        bodyParams
      );

      console.log("res", res.data);

      await Alert({ success: res.data.message });

      // await saveCookie(res.data);
      window.location.reload();
    } catch (error) {
      console.log("error register", error.response.data);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
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

            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Enter phone number"
                onChange={(e) => setPhone(e.target.value)}
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

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submit}>
            <i className="fa fa-refresh fa-spin"></i>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterModal;
