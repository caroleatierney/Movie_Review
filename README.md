# Week 14 Assignment

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

  // return (
    // <div>
      {/* <h1>testING</h1> */}
    {/* {
        movies.map((movie, index) =>
          <div key = {index}>
            {movie.id},{movie.title};
            <div>
            {movie.body}
          </div>
          <hr></hr>
        </div>
      )
    } */}
    {/* </div> */}
  // )

    // render() {
    //   return(
    //       <div>
    //         <h1>This is a view created by a class component</h1>
    //       </div >
    //     );
    // }

<!-- ReactDOM.render(<App />, document.getElementById('app')); -->


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

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


        <div>
            <h1 id="appTitle">Indiana Jones movie reviews</h1>
            <div className="col movieContainer">
                <div className="row movieRow">
                    {movies.map( (movie, index) => ( 
                        <div className="col-6 movieCard" key={index}>
                            <h1 id="title">{movie.name}</h1>
                            <img src={movie.poster} className="movieImage" />
                            {/* <button id="trailor"> */}
                                {/* <a id="aTag" href="{movie.url}" >Watch the Trailor!</a> */}
                            {/* </button> */}
                            <RatingForm />
                        </div>
                    )) }
                </div>
            </div>
        </div>