import React, { useState } from "react";
import Alert from "../../../features/Alert";
import queryString from "query-string";

import "./Search.css";

function Search(props) {
  const [name, setName] = useState("");
  const [params, setParams] = useState({
    name: queryString.parse(window.location.search).name,
    page:
      typeof queryString.parse(window.location.search).page === "undefined"
        ? 1
        : queryString.parse(window.location.search).page,
  });

  const search = async (e) => {
    await e.preventDefault();

    //input

    if (!checkRequest()) return;

    console.log(checkRequest());

    //db

    //res

    console.log("name: " + name);
    window.location.href = `/?name=${name}`;
  };

  const checkRequest = () => {
    if (!name || name.length < 1)
      return Alert({ warning: "Your text is not valid" });

    return true;
  };

  return (
    <form className="search_wrapper" onSubmit={search}>
      <input
        className="search_input"
        placeholder={params.name}
        // value={}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" className="search_button">
        {/* <img src="/images/SearchIcon.png" className="search_icon" alt="Image" /> */}
        Search
      </button>
    </form>
  );
}

export default Search;
