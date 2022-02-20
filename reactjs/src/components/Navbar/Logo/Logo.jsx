import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Logo.css";

function Logo(props) {
  const [image, setImage] = useState("/images/LogoHome.png");

  return (
    <div className="logo_frame">
      <Link to="/">
        <img src={image} className="logo_home" alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
