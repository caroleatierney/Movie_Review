import React, { useEffect, useState } from 'react';
import './RatingForm.css';

function RatingForm() {
    return (
        <form>
            <div className='form-group'>
                <label htmlFor="userName">User Name:</label>
                <input id="userName" placeholder="User Name"/>

                <label htmlFor="date">Date</label>
                <input id="date" placeholder="Current Date"/>

                <label htmlFor="review">Review</label>
                <input id="review" placeholder="Review" type='text'/>
            </div>
        </form>
    )
}

export default RatingForm;