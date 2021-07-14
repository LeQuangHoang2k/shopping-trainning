import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import "./Logout.css";

function Logout(props) {
    const submit = () => {
        localStorage.removeItem("account");

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
