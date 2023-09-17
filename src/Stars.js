import React, { useEffect, useState } from 'react';
import './Stars.css';

function Stars() {
    // setting state for stars
    const [stars, setStars] = useState(0);
    
    // Add one each time green (+) button is clicked
    // Alert if over >=5
    const addRating = () => {
        if (stars >= 5) {
            alert("5 Stars is the highest rating you can give!")
        } else {
            setStars(stars + 1);
        }
    }

    // Subtract one each time red (-) button is clicked
    // Alert if over <=0
    const lowerRating = () => {
        if (stars <= 0) {
            alert("No negative ratings allowed!")
        } else {
            setStars(stars - 1);
        }
    }

    // return html with stars buttons for component
    return (
        <div>
            <div id="starRow" className="row starRow">
                <div className="col starsContainer">
                    <button className="btn btn-success" onClick={addRating}>+</button>

                    <div className="imageContainer">
                        <img src="./Star.png" className="star" alt="Star" ></img>
                        <div className="centered">{stars}</div>
                    </div>

                    <button className="btn btn-danger" onClick={lowerRating}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Stars;


// the actual stars will appear in the form box
//         <img src="./Star.png" class="star" alt="Star" />
//         <img src="./Star.png" class="star" alt="Star" />
//         <img src="./Star.png" class="star" alt="Star" />
//         <img src="./Star.png" class="star" alt="Star" />
//         <img src="./Star.png" class="star" alt="Star" />

// < div class="alert alert-danger" role="alert" >
//     5 Stars is the highest rating you can give!
// </div>

// < div class="alert alert-danger" role = "alert" >
//             No negative ratings allowed!
// </div>


// {/* {
//                             (() => {
//                             if (stars == 1)
//                                 return 
//                                 <span>test1</span> >
//                             if (stars == 1)
//                                 return {
//                                    <span>test2</span>
//                                 }
//                             else (stars > 2)
//                                 return
//                                    <span>test3</span>
//                             })()
//                         } */}

// {/* {stars == 1 ? 
//                         <img src="./Star.png" class="star" alt="Star" />
//                      :
//                     stars == 2 ?
//                         <img src="./Star.png" class="star" alt="Star" />
//                         <img src="./Star.png" class="star" alt="Star" />

//                     } */}

// {/* // {stars == 3 &&
//                     //     <img src="./Star.png" class="star" alt="Star" />
//                     //     <img src="./Star.png" class="star" alt="Star" />
//                     //     <img src="./Star.png" class="star" alt="Star" />
//                     // }

//                     // {stars == 4 &&
//                     //     <img src="./Star.png" class="star" alt="Star" />
//                     //     <img src="./Star.png" class="star" alt="Star" />
//                     //     <img src="./Star.png" class="star" alt="Star" />
//                     //     <img src="./Star.png" class="star" alt="Star" />
//                     // }

//                     // {stars == 5 &&
//                     //     <img src="./Star.png" class="star" alt="Star" />
//                     //     <img src="./Star.png" class="star" alt="Star" />
//                     //     <img src="./Star.png" class="star" alt="Star" />
//                     //     <img src="./Star.png" class="star" alt="Star" />
//                     //     <img src="./Star.png" class="star" alt="Star" />
//                     // } */}