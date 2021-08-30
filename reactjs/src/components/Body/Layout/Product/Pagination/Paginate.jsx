import React, { useState } from "react";
import { Pagination } from "semantic-ui-react";
import queryString from "query-string";

import "./Paginate.css";

function Paginate(props) {
  const [params, setParams] = useState({
    name: queryString.parse(window.location.search).name,
    page:
      typeof queryString.parse(window.location.search).page === "undefined"
        ? 1
        : queryString.parse(window.location.search).page,
  });

  const handlePaginationChange = (e, { activePage }) => {
    if (typeof params.name === "undefined")
      return (window.location.href = `?page=${activePage}`);
    return (window.location.href = `?name=${params.name}&page=${activePage}`);
  };

  return (
    <div className="paginate_wrapper">
      <Pagination
        defaultActivePage={params.page}
        onPageChange={handlePaginationChange}
        totalPages={10}
      />
    </div>
  );
}

export default Paginate;
