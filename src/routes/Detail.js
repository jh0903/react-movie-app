import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import Spinner from "../components/Spinner";
import styles from "./Home.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.container}>
          <MovieDetail
            title={movie.title}
            coverImg={movie.medium_cover_image}
            like_count={movie.like_count}
            rating={movie.rating}
            runtime={movie.runtime}
            year={movie.year}
            genres={movie.genres}
          />
        </div>
      )}
    </>
  );
}

export default Detail;
