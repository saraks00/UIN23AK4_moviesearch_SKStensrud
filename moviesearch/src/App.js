import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import MovieCards from './Components/MovieCards';
import MoviePage from './Components/MoviePage';

function App() {
  const [movies, setMovies] = useState([])
  const [setSearch] = useState('movie')

  const getMovies = async() => {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=eeca3438`)
    const data = await response.json()
    setMovies(data.hits)
  }
  useEffect(() => { getMovies()}, [])
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<MovieCards movies={movies} setSearch={setSearch} getMovies={getMovies} />} />
        <Route path=':slug' element={<MoviePage movies={movies} />} />
      </Route>
    </Routes>
  );
}

export default App;
