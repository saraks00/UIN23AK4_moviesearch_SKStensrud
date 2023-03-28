import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Link} from "react-router-dom"
import MovieCards from './Components/MovieCards';
import MoviePage from './Components/MoviePage';

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const getMovies = async (setSearch) => {
    const url = `http://www.omdbapi.com/?s=${setSearch}&type=movie&plot=full&apikey=25dbba7e&r=json`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      const moviesWithInfo = await Promise.all(
          responseJson.Search.map(async (movie) => {
            const movieUrl = `http://www.omdbapi.com/?i=${movie.imdbID}&plot=full&apikey=25dbba7e&r=json`;
            const movieResponse = await fetch(movieUrl);
            const movieResponseJson = await movieResponse.json();
            return { ...movie, ...movieResponseJson };
          })
      );
      setMovies(moviesWithInfo);
    }
  };
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
