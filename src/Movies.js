import React, { useEffect, useState } from 'react';
import './Movies.css';
import Stars from './Stars';
import RatingForm from './RatingForm';

let query = "Indiana"
const API_URL = "https://movie-database-imdb.p.rapidapi.com/movies/?name=" + query;

const Movies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const resp = await fetch(API_URL, {
                    "method": "GET",
                    "headers": {
                        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
                        "X-RapidAPI-Host": "movie-database-imdb.p.rapidapi.com"
                    }
                });

                const movies = await resp.json();
                setMovies(movies.data)
                // console.log({movies}[1].title)
                console.log(movies)

            } catch (error) {
                setIsError(true)
                console.log(error);
            }
            setIsLoading(false)
        };
        fetchMovies();
    }, []);

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>There was an error</h2>
    }

    // I had to can use optional chaining by adding a question mark 
    // because it said "Cannot read properties of undefined (reading 'map')"

    return (
        <div>
            <h1>Movie Project From HELL!!!</h1>
            <div className="movieContainer">
                <h1>This is the Movie Container</h1>
                <h2>id: "2"</h2>
                <h2>Indiana Jones and the Raiders of the Lost Ark"</h2>
                <div>"https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg"</div>
                <div>https://www.imdb.com/title/tt0082971</div>

                <Stars />
                <RatingForm />

                {/* {movies?.map((movie) => (
                    <div className="card" key={movie.id}>
                        <h1>test</h1>
                        <h1>movie.id</h1>
                        <h1>movie.name</h1>
                        <h1>movie.poster</h1>
                        <h1>movie.url</h1>
                    </div>
                ))} */}
            </div>
        </div>
    )
}

export default Movies;