import React, { useEffect, useState } from 'react';
import './Movies.css';
import Stars from './Stars';
import RatingForm from './RatingForm';
import Review from './Review';

let query = "Indiana"
const API_URL = "https://movie-database-imdb.p.rapidapi.com/movies/?name=" + query;

const Movies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [movies, setMovies] = useState([]);

    useEffect(() => {
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
                setMovies(movieList)
                // console.log(movieList)
                // console.log(movies.results[0].name)


                // console.log(movieList.results)
                // console.log("movie list array [0], NAME IS:   =    " + movieList.results[0].name) // with array of movies


                // setMovies(resp.data)
                // console.log(Movies)

                // const movieList = await resp.json();
                // setMovies(movieList)
                // console.log("MOVIES ARRAY" + {movieList}) // show movieList object
                // console.log("movie list array [0], NAME IS:   =    " + movieList.results[0].name) // with array of movies

                // console.log("poster=    " + movieList.results[0].poster) // with array of movies
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

    // for (let i = 0; i < movies.results.length; i++) {
    for (let i = 0; i < movies.results.length; i++) {

        return (
            <div>
                <h1>Movie Project From HELL!!!</h1>
                <div className="movieContainer">
                    <h1>This is the Movie Container</h1>
                    <h3>{movies.results[i].id}</h3>
                    <h3>{movies.results[i].name}</h3>
                    <div><img src="{movies.results[i].poster}"></img></div>
                    <a id="trailor" href="{movies.results[i].url}">See the trailor!</a>

                    <div><img src="https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg"></img></div>
                    <a id="trailor" href="https://www.imdb.com/title/tt0082971">See the trailor!</a>

                    <Stars />
                    <Review />
                    <RatingForm />
                    
                </div>
            </div>
        )
    }   
}

export default Movies;

                    // <div><img src="{movies.results[i].poster}"></img></div>
                    // <a id="trailor" href="{movies.results[i].url}">See the trailor!</a>


{/* const movieCards = movieList.map(movieCard => (
        console.log("movie" = movieCard.name)
)) */}

{/* <h2>id: "2"</h2>
    <h2>Indiana Jones and the Raiders of the Lost Ark"</h2>
    <div><img src="https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg"></img></div>
    <a id="trailor" href="https://www.imdb.com/title/tt0082971">See the trailor!</a> */}

// <div className="card" key={movie.id}>
//     <h1>test</h1>
//     <h1>movieList.results.id</h1>
//     <h1>movieList.results.name</h1>
//     <h1>movieList.results.poster</h1>
//     <h1>movieList.results.url</h1>
// </div>