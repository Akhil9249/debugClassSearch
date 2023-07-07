import React from 'react'
import './SearchInput.css'

export const SearchInputs = ({searchInputValue,handleChange,clearSearch}) => {
  return (
    <div className='search-input-container'>
      <input type="text" value={searchInputValue} placeholder='Search here...' onChange={handleChange}/>
      {searchInputValue && <button onClick={clearSearch}><img width="25px" height="25px" style={{objectFit:"contain"}} src="https://cdn-icons-png.flaticon.com/512/57/57165.png" alt="" /></button>}
      
      
    </div>
  )
}


