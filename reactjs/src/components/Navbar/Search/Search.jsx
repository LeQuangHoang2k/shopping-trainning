import React, { useEffect, useState } from "react";
import Alert from "../../../features/Alert";
import queryString from "query-string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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

  useEffect(() => {
    console.log("a", params.nane);
  }, [params.name]);

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
    if (!name || name.length < 1) {
      Alert({ warning: "Your text is not valid" });
      return;
    }

    return true;
  };

  return (
    <div className="search_side">
      <form className="search_wrapper" onSubmit={search}>
        <div className="search_frame">
          <input
            id="search_product"
            className="search_input"
            placeholder={params.name ? params.name : ""}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            style={{ display: params.name ? "none" : "block" }}
            className="search_label"
            htmlFor="search_product"
          ></label>
          <button type="submit" className="search_button">
            <FontAwesomeIcon
              icon={faSearch}
              color="#009DFF"
              style={{ cursor: "pointer" }}
            />
            &nbsp;
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
