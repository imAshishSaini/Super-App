import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Retrieve data from localStorage
    const storedUser = localStorage.getItem("user");
    const storedGenres = localStorage.getItem("selectedGenres");

    // Initialize state with safe parsing
    const [user, setUser] = useState(() => {
        try {
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (error) {
            console.error("Error parsing user data from localStorage:", error);
            return null;
        }
    });

    const [selectedGenres, setSelectedGenres] = useState(() => {
        try {
            return storedGenres ? JSON.parse(storedGenres) : [];
        } catch (error) {
            console.error("Error parsing selectedGenres data from localStorage:", error);
            return [];
        }
    });

    // Update localStorage whenever user or selectedGenres changes
    useEffect(() => {
        if (user !== null) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    useEffect(() => {
        localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres));
    }, [selectedGenres]);

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                selectedGenres,
                setSelectedGenres,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
