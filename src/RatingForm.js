import React, {  useState } from 'react';
import './RatingForm.css';

function RatingForm() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [review, setReview] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('The info you Entered was: {name}, {date}, {review}')
        // pass these values into review form container
        // put name date and review into a variablr and pass it to review component
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
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
                <input type="submit" />
            </div>
        </form>
    )
    console.log(name, date, review)
}

export default RatingForm;