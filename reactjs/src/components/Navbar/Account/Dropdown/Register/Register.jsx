import { Button, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";
import "./Register.css";
import RegisterModal from "./RegisterModal/RegisterModal";

function Login(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="account_register" onClick={handleShow}>
                Register
            </Button>

            <RegisterModal show={show} handleClose={handleClose} />
        </>
    );
}

export default Login;
