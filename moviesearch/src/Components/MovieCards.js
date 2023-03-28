import MovieCard from "./MovieCard";
import Search from './Search'

export default function MovieCards({movies, setSearch, getMovies}){
    return(
        <>
        <Search setSearch={setSearch} getMovies={getMovies} />
        <section className="movie-list">
            <h2>Filmer</h2>
            {movies.map((movie, index) => ( <MovieCard key={index} title={movie?.movie?.label} img={movie?.movie?.image} year={movie?.movie?.year}
            gen={movie?.movie?.gen} dir={movie?.movie?.dir} act={movie?.movie?.act} awards={movie?.movie?.awards} slug={movie?.movie?.label.replace(/\s/g, "-").toLowerCase()}/>))}
        </section>
        </>
    )
}