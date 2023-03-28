import { useParams } from "react-router-dom";

export default function MoviePage({movies}){
    const {slug} = useParams()
    const movie = movies.find((mov) => mov?.movie?.label.replace(/\s/g, "-").toLowerCase() === slug)
    console.log(movie?.movie?.label)

    return(
        <section>
            <h1>{movie?.movie.label}</h1>
            <img src={movie?.movie?.image} alt={movie?.movie.label}/>
            <p>{movie?.movie?.year}</p>
            <p>{movie?.movie?.dir}</p>
            <p>{movie?.movie?.act}</p>
            <p>{movie?.movie.plot}</p>
        </section>
    )
}