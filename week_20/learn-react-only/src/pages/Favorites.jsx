import MovieCard from "../components/movieCard";
import { useMovieContext } from "../context/MovieContext";
import "../css/Favorites.css";

function Favorite() {
    const { favorite } = useMovieContext();
    if (favorite && favorite.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favorite</h2>
            <div className="movies-grid">
                {favorite.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
            </div>
        );
    }
    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>
                Start adding movies to your favorite and they will appear here
            </p>
        </div>
    );
}

export default Favorite;
