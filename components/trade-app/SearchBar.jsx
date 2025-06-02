import React from "react";
import "../../styles/pages/fin.css";

function SearchBar({ sortBy, onChangeSort, filterBy, onChangeFilter }) {
  function handleSortChange(event) {
    onChangeSort(event.target.value);
  }

  function handleFilterChange(event) {
    onChangeFilter(event.target.value);
  }

  return (
    <div className="search-bar">
      <div >
        <strong className="sort-options">Sort by:</strong>
        <label className="sort-options">
          <input
            type="radio"
            value="Alphabetically"
            name="sort"
            checked={sortBy === "Alphabetically"}
            onChange={handleSortChange}
          />
          Alphabetically
        </label>
        <label>
          <input
            type="radio"
            value="Price"
            name="sort"
            checked={sortBy === "Price"}
            onChange={handleSortChange}
          />
          Price
        </label>
      </div>

      <div className="filter-options">
        <label>
          <strong className="sort-options">Filter by type:</strong>
          <select onChange={handleFilterChange} value={filterBy}>
            <option value="All">All</option>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
            <option value="Consumer Goods">Consumer Goods</option>
            <option value="Retail">Retail</option>
            <option value="Automotive">Automotive</option>
            <option value="Energy">Energy</option>
            <option value="Aerospace">Aerospace</option>
            <option value="Industrial">Industrial</option>
            <option value="Price">Price</option> {/* Add this option for filtering by price */}
          </select>
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
