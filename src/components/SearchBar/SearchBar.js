import React from 'react'
import './SearchBar.css';

function SearchBar(props) {
  return (
    <div className='SearchBar'>
        <form className='flex flex-col align-center just-center'>
            <input type="text" id="songTitle" name="songTitle" placeholder='Enter A Song Title' value={props.searchValue} onChange={props.onSearchChange} />
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchBar