import React from "react";

import Layout from "./Layout/Layout";
import "./Body.css";
import Paginate from "./Pagination/Paginate";

function Body(props) {
  return (
    <div className="body_wrapper">
      <Layout />
      <Paginate />
    </div>
  );
}

export default Body;
