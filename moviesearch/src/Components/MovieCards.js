import React, {useState, useEffect} from 'react'
import axios from 'axios'


const api = 'http://www.omdbapi.com/?'

const apiKey = 'apikey=[eeca3438]&'

const MovieCards = () => {
    const [name, setName] = useState("")
    const [movies, setMovies] = useState([])

    const getInfo = () => {
        axios.get(`${api}${apiKey}&s=${name}&type=movie&page1`).then((mov) => {if (mov) {setMovies(mov.data.search)}})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        getInfo()
    }
   


    return(
        <div>
            <form>
                <input type='text' name='name' placeholder='movie name' onChange={(event) => setName(event.target.value)}/>
                <button type='submit' onClick={(event) => handleSubmit(event)}>search</button>
            </form>
            {movies ?
            <section>
                {movies.map(movie => (
                    <article key={movie.imdbID} className="movie">
                        <img src={movie.Poster} alt={movie.Title} />
                        <h2>{movie.Title}</h2>
                        <button className='detailBtn'>Details</button>
                    </article>
                ))}
            </section>
            : null}
        </div>
   
    )
} 

export default MovieCards