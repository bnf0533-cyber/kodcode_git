import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorite, setFavorite] = useState(() => {
        const storedFavs = localStorage.getItem("favorites")
        return storedFavs ? JSON.parse(storedFavs): []});  
          
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorite));
    }, [favorite]);

    const addToFavorites = (movie) => {
        setFavorite((prev) => [...prev, movie]);
    };
    const removeFromFavorites = (movieId) => {
        setFavorite((prev) => prev.filter((movie) => movie.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favorite.some((movie) => movie.id === movieId);
    };

    const value = {
        favorite,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    };
    return (
        <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
    );
};
