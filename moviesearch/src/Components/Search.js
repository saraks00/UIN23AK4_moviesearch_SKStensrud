import { useState } from 'react';

export default function Search({setSearch}) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(searchQuery)
  }

  return (
    <form onSubmit={handleSearch}>
      <input type="text" placeholder="Search movies..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  )
}