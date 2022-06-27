import React from "react";

function HogDetails({ hog }) {
    const { specialty, greased, weight } = hog

    return (
        <div className="description">
            <strong>{greased ? "greased" : "ungreased"}</strong>
            <p>Specialty: <strong>{specialty}</strong></p>
            <p>Weight: <strong>{weight}</strong></p>
            <p>Highest Medal Achieved: <strong>{hog["highest medal achieved"]}</strong></p>
        </div>
    )
}

export default HogDetails