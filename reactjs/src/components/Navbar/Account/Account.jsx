import React, { useEffect, useState } from "react";
import { axios } from "axios";

import Dropdown from "./Dropdown/Dropdown";
import DropdownUser from "./DropdownUser/DropdownUser";
import Alert from "../../../features/Alert";

import "./Account.css";


// import AccountIcon from "/images/AccountIcon.png";
// import AccountArrow from "/images/AccountArrow.png";

function Account(props) {
    const [account, setAccount] = useState(
        JSON.parse(localStorage.getItem("account")) || null
    );

    const [accountImage, setAccountImage] = useState("/images/AccountIcon.png");
    const [accountTitle, setAccountTitle] = useState("My Account");

    const [dropdownComponent, setDropdownComponent] = useState(<Dropdown />);

    useEffect(() => {
        updateAccountUI();
    }, []);

    const updateAccountUI = () => {
        if (!account)
            return setTimeout(() => {
                Alert({
                    message:
                        "Vui lòng đăng nhập để nhận ưu đãi khi săn sale Tiki 7/7 nhé !",
                });
            }, 2000);

        if (account.AccountPictureURL !== "")
            setAccountImage(account.AccountPictureURL);

        if (account.AccountName !== "") setAccountTitle(account.AccountName);
        else {
            setAccountTitle(account.AccountEmail);
        }

        setDropdownComponent(<DropdownUser />);
    };

    return (
        <div className="account_wrapper">
            <div className="account_content">
                <img src="/images/AccountIcon.png" className="account_image" alt="Image" />
                <div className="account_name">
                    <span className="account_title">{accountTitle}</span>
                </div>
                <img src="/images/AccountArrow.png" className="account_arrow" alt="Image" />

                {dropdownComponent}
            </div>
        </div>
    );
}

export default Account;
