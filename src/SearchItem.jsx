import React, { useRef } from 'react'

const SearchItem = ({search, setSearch}) => {
    const inputRef = useRef()
  return (
   <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
       <label htmlFor="search">
           Search
       </label>
       <input 
       ref={inputRef} 
       type="text" 
       role="searchbox" 
       placeholder='Search item'
       value={search}
       onChange={(e)=>setSearch(e.target.value)} />
   </form>
  )
}

export default SearchItem