import Movie from "../components/Movie";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Spinner from "../components/Spinner";
import { IMAGE_BASE_URL, api_key } from "../components/config";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=ko-KR`
    );
    const json = await response.json();

    setMovies(json.results);
    console.log(movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={`${IMAGE_BASE_URL}/original/${movie.poster_path}`}
              title={movie.title}
              year={movie.release_date}
              summary={movie.overview}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
