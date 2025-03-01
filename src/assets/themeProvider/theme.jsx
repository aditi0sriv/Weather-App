import React from "react";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(); // creating theme context, to store the theme globally

export function ThemeProvider ({ children }) { // theme provider component
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    // updating localStorage whenever theme changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme; // applying them
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}> 
        {children}
    </ThemeContext.Provider>
}

// "value" makes theme and toggletheme available anywhere in the app