import { useState } from 'react';

export default function Search({ setSearch, getMovies }) {
    const [searchValue, setSearchValue] = useState('')
  
    const handleSubmit = (e) => {
      e.preventDefault()
      setSearch(searchValue)
      getMovies()
      setSearchValue('') // clear input after search
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    )
  }