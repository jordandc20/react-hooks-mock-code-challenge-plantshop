import React from "react";

function Search({onFilter,filterString}) {


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={filterString}
        onChange={(e)=> onFilter(e.target.value)}
      />
    </div>
  );
}

export default Search;
