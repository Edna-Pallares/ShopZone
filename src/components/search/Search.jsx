import React from "react";
import "./Search.css";

const Search = ({ value, onChangeData, onFilter }) => {
  return (
    <div>
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChangeData}
      />
    </div>
  );
};

export default Search;
