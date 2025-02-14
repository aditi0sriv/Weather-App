import React, { useContext } from "react";
import './css/styles.css';
import { ThemeContext } from "../themeProvider/theme.jsx";
import { Sun, Moon } from "lucide-react";

function WelcomeMessage() {
    const { theme, toggleTheme } = useContext(ThemeContext); // theme and toggleTheme

    return (
        <div className={`copy ${theme}`}>  {/* Apply theme class */}
            <div className="tagline">
                <p>Weather <br /> <span id="tagline">You like it or not</span></p>
            </div>

            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? <Moon size={30} color="black" /> : <Sun size={30} color="white" />}
            </button>

        </div>
    );
}


export default WelcomeMessage;