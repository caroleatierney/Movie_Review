import React, { useEffect, useState } from 'react';
import './Movies.css';
import RatingForm from './RatingForm';
// import Review from './Review';

// const handleSearch = () => {
  // set query for api to only return based on search criteria
  let query = "Indiana Jones";
    // let query = "Stranger Things";

    const API_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=" + process.env.REACT_APP_TMDB_API_KEY + "&query=" + query;

//   const searchTerm = document.getElementById("searchInput").value;
//   const newQuery = encodeURIComponent(searchTerm); // Encode search term for URL
//   const newAPI_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${newQuery}`;

//   fetchMovies(newAPI_URL); // Call fetchMovies with the updated API URL
// };



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
              method: "GET",
              headers: {
                Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
                "Content-Type": "application/json",
              },
            });

            // assign variable to response's object
            const movieList = await resp.json();

            // filter retrieved list for movies only
            // const filteredMovies = movieList.results.filter(
            //     (movie) => movie.media_type === "movie" || movie.media_type === "tvSeries"
            // );
            // setMovies(filteredMovies);

            // assign variable to response object's results 
            setMovies(movieList.results)

            console.log(movieList)
            console.log(movieList.results);
            
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
        <h1 id="appTitle">Movie Reviews</h1>
        {/* <div className="flex flex-row">
          <h1 className='pt-4'>Enter a movie name or actor name</h1>
          <input
            type="text"
            id="searchInput"
            placeholder="Enter movie or actor name"
          />
          <button onClick={handleSearch}>Search</button>
        </div> */}
        <div className="col movieContainer">
          <div className="row movieRow">
            {movies.map((movie, index) => (
              <div className="col-3" key={index}>
                <h1 id="title">{movie.title}</h1>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="movieImage"
                  alt={movie.title}
                />
                <a
                  href={`https://www.themoviedb.org/movie/${movie.id}`}
                  id="trailor"
                  target="_blank"
                >
                  Watch the Trailer!
                </a>
                <RatingForm />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Movies;