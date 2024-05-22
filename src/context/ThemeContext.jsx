import { createContext, useLayoutEffect, useState } from "react";


export const ThemeContext = createContext();


export function ThemeContextProvider ({ children }) {
    const initialTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useState(initialTheme);
    const toggleTheme = () => {
        setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
    }
    useLayoutEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark' || (!theme && systemTheme)) {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    }, [theme, systemTheme])

    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    );
}