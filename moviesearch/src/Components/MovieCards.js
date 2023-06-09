import MovieCard from "./MovieCard";
import Search from './Search'

export default function MovieCards({movies, setSearch}){
    return(
        <>
        <Search setSearch={setSearch} />
        <section className="movie-list">
            <h2>Filmer</h2>
            {movies.map((movie, index) => ( <MovieCard key={index} title={movie.Title} img={movie.Poster} year={movie.Year}
            gen={movie.Genre} dir={movie.Director} act={movie.Actors} awards={movie.Awards} slug={movie?.movie?.label.replace(/\s/g, "-").toLowerCase()}/>))}
        </section>
        </>
    )
}