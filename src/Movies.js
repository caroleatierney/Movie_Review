import React, { useEffect, useState } from 'react';
import './Movies.css';
import RatingForm from './RatingForm';
// import Review from './Review';

// set query for api to only return titles/search with Indiana
let query = "Indiana"

// save API URL with Query
const API_URL = "https://movie-database-imdb.p.rapidapi.com/movies/?name=" + query;

const Movies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [movies, setMovies] = useState([]);


    // was attempting to try to add the reviews
    // Rating form calls this function passing in the review object 
    // const addNewMovieReview = (moviewReview) => {
    //     const newestReview = {
    //         // no clue
    //     }
    // }

        // fetch call to API
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

                // assign variable to response's object
                const movieList = await resp.json();

                // assign variable to response object's results 
                setMovies(movieList.results)
                console.log(movieList)
                
            } catch (error) {
                setIsError(true)  
                console.log(error);
            }
            setIsLoading(false)
        };

    // This is the first fetch (useEffect Hook)
    useEffect(() => {
        fetchMovies();
    }, []);

    // let user know when there is a lag in API return
    if (isLoading) {
        return <h2>Loading...</h2>
    }

    // let user know when there is an error frpom API
    if (isError) {
        return <h2>There was an error</h2>
    }

    // return a movie div to the App component with movie name, poster and trailor link
    return (
        <div>
            <h1 id="appTitle">Indiana Jones movie reviews - this is to test the new remote is set</h1>
            <div className="col movieContainer">
                <div className="row movieRow">
                    {movies.map( (movie, index) => ( 
                        <div className="col-6" key={index}>
                            <h1 id="title">{movie.name}</h1>
                            <img src={movie.poster} className="movieImage" />
                            <a href={movie.url} id="trailor" target="_blank">Watch the Trailor!</a>
                            <RatingForm />
                        </div>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default Movies;