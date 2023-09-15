import React, { useEffect, useState } from 'react';
import './Stars.css';

function Stars() {
    const [stars, setStars] = useState(0);
    
    const addRating = () => {
        if (stars >= 5) {
            alert("5 Stars is the highest rating you can give!")
        } else {
            setStars(stars + 1);
        }
    }

    const lowerRating = () => {

        if (stars <= 0) {
            alert("No negative ratings allowed!")
        } else {
            setStars(stars - 1);
        }
    }

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


    return (
        <div className="container h1">
            <div id="starRow" className="row starRow">
                <div className="col">
                    <button className="btn btn-success" onClick={addRating}>+</button>
                    <button className="btn btn-danger" onClick={lowerRating}>-</button>

                        {/* {
                            (() => {
                            if (stars == 1)
                                return 
                                <span>test1</span> >
                            if (stars == 1)
                                return {
                                   <span>test2</span>
                                }
                            else (stars > 2)
                                return
                                   <span>test3</span>
                            })()
                        } */}

                    {/* {stars == 1 ? 
                        <img src="./Star.png" class="star" alt="Star" />
                     :
                    stars == 2 ?
                        <img src="./Star.png" class="star" alt="Star" />
                        <img src="./Star.png" class="star" alt="Star" />

                    } */}

                    {/* // {stars == 3 &&
                    //     <img src="./Star.png" class="star" alt="Star" />
                    //     <img src="./Star.png" class="star" alt="Star" />
                    //     <img src="./Star.png" class="star" alt="Star" />
                    // }

                    // {stars == 4 &&
                    //     <img src="./Star.png" class="star" alt="Star" />
                    //     <img src="./Star.png" class="star" alt="Star" />
                    //     <img src="./Star.png" class="star" alt="Star" />
                    //     <img src="./Star.png" class="star" alt="Star" />
                    // }

                    // {stars == 5 &&
                    //     <img src="./Star.png" class="star" alt="Star" />
                    //     <img src="./Star.png" class="star" alt="Star" />
                    //     <img src="./Star.png" class="star" alt="Star" />
                    //     <img src="./Star.png" class="star" alt="Star" />
                    //     <img src="./Star.png" class="star" alt="Star" />
                    // } */}

                    <img src="./Star.png" class="star" alt="Star" />
                    {stars} rating
                </div>
            </div>
        </div>
    )
}

export default Stars;