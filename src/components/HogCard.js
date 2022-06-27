import React, { useState } from "react";
import HogDetails from "./HogDetails";

function HogCard({ hog }) {
    const { name, image } = hog

    const [showDetails, setShowDetails] = useState(true)

    const handleDetails = () => {
        setShowDetails(!showDetails)
    }
    
    return (
        <div className="ui card">
            <div className="image">
                <img src={image} alt="pig pic" />
            </div>
            <div className="content">
                <h3 className="header">{name}</h3>
            </div>
            <div className="extra content">
                {showDetails ? <HogDetails hog={hog} /> : null}
                <button onClick={handleDetails}>More Info</button>
            </div>  
        </div>
    )
}

export default HogCard