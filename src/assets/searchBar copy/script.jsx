import React from "react";
import './css/styles.css';

function WelcomeMessage() {
    return (
        <div className="copy">
            <div className="tagline">
                <p>Weather <br /> <span id="tagline">You like it or not</span></p>
            </div>
        </div>
    )
}


export default WelcomeMessage;