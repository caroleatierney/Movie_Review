# Week 14 Assignment

The fetchMovies function is called twice in this code. The first call happens inside the useEffect hook with an empty dependency array as the second argument. This ensures that the fetchMovies function is called only once when the component mounts.

However, the second call to fetchMovies might happen if there is a certain state change that triggers a re-render of the component. It could be due to a change in the isLoading or isError state variables, or any other state that might affect the rendering of this component.

To prevent the second call to fetchMovies, you can check the component's rendering lifecycle and make sure that there is no unnecessary re-rendering happening. You can also debug the component's state and props to identify the cause of the second call and make any necessary adjustments to avoid it.

if you want to clear the console each time, use console.clear();

Database is through RapidAPI: Movie Database IMDb

Switched to $5 a month because went over 1,000 in 3 days. Already at 1,800. Everytime you make a change it fetches twice. 

### Coding Steps:
- Using what you've learned this week, create a page of an application that enables users to vote and leave reviews on movies.
- All data necessary for this assignment, including Movies and Reviews, can be pulled from an API or you can create the Movies and their Reviews yourself.
- Your application must include the following components:
    - MovieList: a container for all the Movie components and their data.  
    - Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
    - Stars: a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)
    - ReviewList: a container inside of a Movie that houses Review components.
    - Review: A text review a user can leave on a movie.
    - ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie.
    - All this data can be stored in an array, no networking or database needed for this assignment.

# This is how I initially set up this React Project

## based on these links:
    ### getting info from an API and displaying
        - https://dev.to/gregpetropoulos/github-repo-setup-for-react-app-1dnd
    ### Using Rapid API's Movie API
        - https://www.youtube.com/watch?v=-7mCyBD5ueM
    ### Endpoints
        - https://rapidapi.com/SAdrian/api/moviesdatabase

# VSCODE
- Don't start by creating a new github repostory.
- On command line type:
- $ mkdir week14_assignment_movies   (cannot have capitol letters!)
- $ cd into week14_assignment_movies
- $ npx create-react-app .   (use period to put the template in your project)
- $ npm start

#Github
- Go to your Github account and create repo by clicking on "repositories" and then "new"
- Enter the name of your repo, I'll call it week14_assignment_movies it can be different from the local project folder
- radio button public
- **Crucial -- Do not add README, .gitignore or license
- click on Create repository button
- Now we are ready to use our newly created github repo with react in the same vscode terminal we created the CRA and run these commands:
- $ git remote add origin https://github.com/caroleatierney/week14_assignment_movies.git
- $ git remote -v (to make sure upstream was set properly)
- $ git branch -M main
- $ git push -u origin main
- $ git push --set-upstream origin main

RAPIDAPI
- Login and get key
- put key in .env
- put .env in .gitignore
- Endpoint documentation:
    - https://rapidapi.com/rapidapi/api/movie-database-alternative/

# Getting Started with Create React App
- This was a real simple tutorial to understand how to get and display api data
- https://www.youtube.com/watch?v=43aFTbyQtgo

### BOOTSTRAP
- installed regular bootstrap (not react-bootstrap)

## Available Scripts
- In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
