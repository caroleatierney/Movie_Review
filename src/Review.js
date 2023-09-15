import React, { useState } from 'react';
import './Review.css';
import RatingForm from './RatingForm';

function Review() {
    const [name, setName] = useState("");

    return (
        <form>

            <div className='review'>
                <h1>{name}</h1>
                <h1>{date}</h1>
                <h3>{review}</h3>
            </div>
        </form>
    )
}

export default Review;