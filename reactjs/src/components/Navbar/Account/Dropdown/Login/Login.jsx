import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import LoginModal from "./LoginModal/LoginModal";

import "./Login.css";

function Login(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="account_login" onClick={handleShow}>
                Login
            </Button>

            <LoginModal show={show} handleClose={handleClose} />
        </>
    );
}

export default Login;
