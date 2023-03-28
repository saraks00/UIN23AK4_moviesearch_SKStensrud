import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Link} from "react-router-dom"
import MovieCards from './Components/MovieCards';
import MoviePage from './Components/MoviePage';

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const getMovies = async() => {
    const response = await fetch(`http://www.omdbapi.com/?s=${setSearch}&apikey=eeca3438`)
    const data = await response.json()
    setMovies(data.search)
  }
  useEffect(() => { getMovies()}, [search])
  console.log('movies:', movies)
  return (
    <div id="container">
    <header>
      <Link to="/">
        <h1>IMDB</h1>
      </Link>
    </header>
    <main>
      <Routes>
        <Route index element={<MovieCards movies={movies} setSearch={setSearch} />} />
        <Route path=':slug' element={<MoviePage movies={movies} />} />
      </Routes>
    </main>
    <footer>

    </footer>
  </div>
  );
}

export default App;
