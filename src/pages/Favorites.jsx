import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {

    const { favorites } = useMovieContext();
    if (favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>

                <div className="movie-grid">
                    {favorites.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className="favorite-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding movies to your favorites and they will appear here</p>
        </div>
    );
}

export default Favorites;