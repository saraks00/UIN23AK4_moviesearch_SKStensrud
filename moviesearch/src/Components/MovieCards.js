import MovieCard from "./MovieCard";
import Search from './Search'

export default function MovieCards({ movies, setSearch, getMovies }) {
    return (
      <>
        <Search setSearch={setSearch} getMovies={getMovies} />
        <section className="movie-list">
          <h2>Filmer</h2>
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie?.movie?.Title} // update property name
              img={movie?.movie?.Poster} // add poster image property
              year={movie?.movie?.Year}
              gen={movie?.movie?.Genre}
              dir={movie?.movie?.Director}
              act={movie?.movie?.Actors}
              awards={movie?.movie?.Awards}
              slug={movie?.movie?.Title.replace(/\s/g, "-").toLowerCase()}
            />
          ))}
        </section>
      </>
    )
  }