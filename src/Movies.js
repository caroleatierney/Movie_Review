import React, { useEffect, useState } from 'react';
import './Movies.css';
import RatingForm from './RatingForm';
// import Review from './Review';

let query = "Indiana"
const API_URL = "https://movie-database-imdb.p.rapidapi.com/movies/?name=" + query;

const Movies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [movies, setMovies] = useState([]);

    // Rating form calls this funuction passing in the review object 
    // const addNewMovieReview = (moviewReview) => {
    //     const newestReview = {
    //         // no clue
    //     }
    // }


        const fetchMovies = async () => {
            // console.clear(); // clears console each time for better error readability
            try {
                const resp = await fetch(API_URL, {
                    "method": "GET",
                    "headers": {
                        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
                        "X-RapidAPI-Host": "movie-database-imdb.p.rapidapi.com"
                    }
                });

                const movieList = await resp.json();
                setMovies(movieList.results)
                // console.log(movieList)
                
            } catch (error) {
                setIsError(true)  
                console.log(error);
            }
            setIsLoading(false)
        };

    useEffect(() => {
        fetchMovies();
    }, []);

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>There was an error</h2>
    }

    return (

        <div>
            <h1 id="appTitle">Indiana Jones movie reviews</h1>
            <div className="col movieContainer">
                <div className="row movieRow">
                    {movies.map( (movie, index) => ( 
                        <div className="col-6" key={index}>
                            <h1 id="title">{movie.name}</h1>
                            <img src={movie.poster} className="movieImage" />
                            <a href="{movie.url}" id="trailor">Watch the Trailor!</a>
                            <RatingForm />
                        </div>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default Movies;