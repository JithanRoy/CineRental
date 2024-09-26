import {getAllMovies} from "../data/movies.js";
import { getImgUrl } from "../utils/cine-utility.js";
import MovieCard from "./MovieCard.jsx";

export default function MovieList() {
  const movies = getAllMovies();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}

      </div>
    </div>
  )
}
