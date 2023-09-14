import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import { useState, useEffect } from 'react'; 

let query="Indiana"
const API_URL = "https://movie-database-imdb.p.rapidapi.com/movies/?name=" + query;

function App () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch(API_URL, {
        "method": "GET",
        "headers": {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "movie-database-imdb.p.rapidapi.com"
        }
      }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {
          console.log('ERROR')
        });

// Thurs - Schedule a Mentor meeting for Friday
// Thurs - a container for the list of movies
//         display just the titles
// Thurs - a component for the movie ??? SAY WHAT?
//         I think it would be its own xxxx.js that is a card or something 
//         that is rendered to the app.js?

//         watch videos?
// Thurs - ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie.





// Friday ???? state and shit
    // - Stars: a one to five - star rating component that allows users to rate something(movies in this case, but remember that components are reusable, so you could use it elsewhere!)
    // - ReviewList: a container inside of a Movie that houses Review components.
    // - Review: A text review a user can leave on a movie.
    // - All this data can be stored in an array, no networking or database needed for this assignment.



      // componentDidUpdate() {
      //   console.log(data);
      // }


      // render() {
      //   return (
      //     <div>
      //       <h1>This is a view created by a class component</h1>
      //     </div>
      //   );
      // }
  })


}

// ReactDOM.render(<App />, document.getElementById('app'));

export default App;