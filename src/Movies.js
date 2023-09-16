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
                console.log(movieList)
                
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

    // const movieCards = getMovies() //array of divs
    // for (let i = 0; i < movies.results.length; i++) {
    // function getMovies() {
    return (

        <div>
            <h1>Movie Project From HELL!!!</h1>
            <div className="col movieContainer">
                <div className="row movieRow">
                    <div className="col-4">
                        <h3>{movies.results[0].id}</h3>
                        <h3>{movies.results[0].name}</h3>
                        <div><img src="https://m.media-amazon.com/images/M/MV5BY2M0ZGEwMGQtNzMxOC00OTU2LWExZmUtMTA5N2RhMDZlY2JiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"></img></div>
                        <a id="trailor" href="https://www.imdb.com/title/tt1462764">See the trailor!</a>
                        {/* <div><img src="{movies.results[0].poster}"></img></div> */}
                        {/* <a id="trailor" href="{movies.results[0].url}">See the trailor!</a> */}
                        <Stars />
                        <Review />
                        <RatingForm />
                    </div>
                    <div className="col-4">
                        <h3>{movies.results[1].id}</h3>
                        <h3>{movies.results[1].name}</h3>

                        <div><img src="https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg"></img></div>
                        <a id="trailor" href="https://www.imdb.com/title/tt0082971">See the trailor!</a>

                        {/* <div><img src="{movies.results[1].poster}"></img></div> */}
                        {/* <a id="trailor" href="{movies.results[1].url}">See the trailor!</a> */}

                        <Stars />
                        <Review />
                        <RatingForm />
                    </div>
                    <div className="col-4">
                        <h3>{movies.results[2].id}</h3>
                        <h3>{movies.results[2].name}</h3>

                        {/* <div><img src="{movies.results[2].poster}"></img></div>
                        <a id="trailor" href="{movies.results[2].url}">See the trailor!</a> */}

                        <div><img src="https://m.media-amazon.com/images/M/MV5BY2Q0ODg4ZmItNDZiYi00ZWY5LTg2NzctNmYwZjA5OThmNzE1XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg"></img></div>
                        <a id="trailor" href="https://www.imdb.com/title/tt0097576">See the trailor!</a>                        

                        <Stars />
                        <Review />
                        <RatingForm />
                    </div>
                    <div className="col-4">
                        <h3>{movies.results[3].id}</h3>
                        <h3>{movies.results[3].name}</h3>
                        {/* <div><img src="{movies.results[3].poster}"></img></div> */}
                        {/* <a id="trailor" href="{movies.results[3].url}">See the trailor!</a> */}

                        <div><img src="https://m.media-amazon.com/images/M/MV5BYzgzMTIzNzctNmNiZC00ZDYyLWJjNzktMmQ2MDM2ZDkwZGVhXkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg"></img></div>
                        <a id="trailor" href="https://www.imdb.com/title/tt0087469">See the trailor!</a>    

                        <Stars />
                        <Review />
                        <RatingForm />
                    </div>
                    <div className="col-4">
                        <h3>{movies.results[4].id}</h3>
                        <h3>{movies.results[4].name}</h3>
                        {/* <div><img src="{movies.results[4].poster}"></img></div> */}
                        {/* <a id="trailor" href="{movies.results[4].url}">See the trailor!</a> */}

                        <div><img src="https://m.media-amazon.com/images/M/MV5BZmY5ZTk3ZDMtZjA1MS00NzU4LTk5ZDItYmNhOTkxMGYxMjRlXkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg"></img></div>
                        <a id="trailor" href="https://www.imdb.com/title/tt0367882">See the trailor!</a>   

                        <Stars />
                        <Review />
                        <RatingForm />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Movies;