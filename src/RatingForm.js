import React, {  useState } from 'react';
import './RatingForm.css';

function RatingForm() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [review, setReview] = useState("");

    // when the submit button is pressed, save review and pass it
    // to the movie component's container
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('The info you Entered was: name, date, review')

        // put the review into an object and pass it 
        const movieReview = {
            name: name,
            date: date,
            review: review,
            test: test
        }
        console.log("review object" + movieReview)

        // probably not getting to this!!!
        // call the addReview function from Movies and pass in the review info
        // addMovieReview(movieReview);

        // reset form fields
        setName="";
        setDate="";
        setReview="";
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="userName">Name:
                    <input
                        id="name"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label htmlFor="date">Date
                    <input
                        id="date"
                        value={date}
                        placeholder="Current Date"
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                
                <label htmlFor="review">Review
                    <input
                        id="review"
                        value={review}
                        placeholder="Review"
                        type='text'
                        onChange={(e) => setReview(e.target.value)}
                    />
                </label>
                <input
                    id="submitButton"
                    type="submit"
                />
            </div>
        </form>
    );
}
export default RatingForm;
// export default RatingForm({addMovieReview});