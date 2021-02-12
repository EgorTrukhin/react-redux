import React from 'react';

const SearchPanel = ( { onSearch } ) => {

    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Type here to search"
        onChange={ (event) => onSearch(event.target.value) } />
    );
};

export default SearchPanel;
