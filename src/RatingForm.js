import React, {  useState } from 'react';
import './RatingForm.css';
import Stars from './Stars';
// import Review from './Review';
import Movies from './Movies';

function RatingForm() {
    // set state for variable changing
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    
    // set date to current date
    const reviewDate = new Date().toDateString();
    
    // const [reviewsArray, setReviewsArray] = useState("");

    // This is set up b/c I tried to see if I could get a hard coded array to work for reviews
    let movieReviews = [
        {
            name: "Chuck Taylor",
            date: reviewDate,
            review: "This movie was awesome!"
        },
        {
            name: "Steven Tyler",
            date: reviewDate,
            review: "This movie had a great theme song!"
        },
        {
            name: "Eleven",
            date: reviewDate,
            review: "This movie was not as scary as Hawkins, Indiana!"
        }
    ]

    // couldn't get to this b/c other things not working
    // setReviewsArray("movieReviews")

    // when the submit button is pressed, save review and pass it
    // to the movie component's container
    const handleSubmit = (event) => {
        event.preventDefault(movieReviews);

        // put the review into an object and pass it to the movies component

        // probably not getting to this!!!
        // call the addReview function from Movies and pass in the review info
        // addMovieReview(movieReview);

        // reset form fields not working
        // setName("");
        // setDate=("");
        // setReview=("");
    };

    // return the form for reviewer to add their review
    // include stars component for users to update
    // still trying to figure out how to add array of reviews
    // - commented out for now
    return (
         <form onSubmit={handleSubmit}>
            <Stars />
            <div className="form-group">
                <h3>{reviewDate}</h3>
                <label htmlFor="userName">Name:
                    <input
                        id="name"
                        value={name}
                        placeholder="Name"
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label htmlFor="review">Review
                    <textarea
                        id="review"
                        value={review}
                        placeholder="Review"
                        type='text'
                        rows="4"
                        cols="50"
                        onChange={(e) => setReview(e.target.value)}
                        >
                    </textarea>
                </label>
                <div>
                    <button
                        id="submitButton"
                        type="submit"
                        placeholder="Submit"
                        className="btn btn-secondary btn-lg"
                        onClick={handleSubmit}>
                    Submit
                    </button>
                </div>
                
            </div>
            {/* <Review reviewsArray={movieReviews} /> */}
        </form>
    );
}
export default RatingForm;