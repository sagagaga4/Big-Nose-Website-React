import React from 'react';
import image from "./Images/50.jpg";
import image2 from "./Images/messedup.jpg"; 
import image3 from "./Images/bignose.jpg";

import "./Row.css";
function Row() {
    return (
        <div>
            <div >
            <img className="image" src={image} alt="50"/>
            <img src={image2} alt="messedup"/>
            <img src={image3} alt ="bignose"/>
            </div>
        </div>
    )
}

export default Row
