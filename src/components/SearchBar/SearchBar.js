import React from 'react'
import './SearchBar.css';

function SearchBar(props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearch(props.searchValue);
  }

  return (
    <div className='SearchBar'>
        <form onSubmit={handleSubmit} className='flex flex-col align-center just-center'>
            <input type="text" id="songTitle" name="songTitle" placeholder='Enter A Song Title' value={props.searchValue} onChange={props.onSearchChange} />
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchBar