import React, { useState } from 'react';
import './Review.css';
// import RatingForm from './RatingForm';

function Review({name}) {

    return (
        <form>

            <div className='review'>
                <h1>This is the review container</h1>
                <h1>{name}</h1>
                {/* <h1>{date}</h1> */}
                {/* <h3>{review}</h3> */}
            </div>
        </form>
    )
}

export default Review;