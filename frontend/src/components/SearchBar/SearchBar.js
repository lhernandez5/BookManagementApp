import React, { useState } from "react";
import "./SearchBar.css"

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for books"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
