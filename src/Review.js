// import React, {Component} from 'react';
// import './Review.css';
// import RatingForm from './RatingForm';

// // set up constructor with the array that was passed in
// export default class Review extends Component {
//     constructor(props) {
//         super(props)
//         this.reviewArr = props.reviewsArray
//     }

//     // return a div with each review
//     render () {
//         return (
//             {this.reviewArr.map((review, index) => (
//                 <div className="container">
//                     <div className="row">
//                         <div key={index} className="col review">
//                             <h3>{date}</h3>
//                             <h1>movie name: {reviewArr.name}</h1> 
//                             <h5>movie review: {reviewArr.review}</h5>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//          )
//     }
// }