import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import Spinner from "../components/Spinner";
import { IMAGE_BASE_URL, api_key } from "../components/config";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`
      https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=ko-KR`)
    ).json();
    console.log(json);
    console.log(json.backdrop_path);
    setMovie(json);
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
        <div>
          <MovieDetail
            title={movie.title}
            coverImg={`${IMAGE_BASE_URL}/original/${movie.poster_path}`}
            like_count={movie.popularity}
            rating={movie.vote_average}
            runtime={movie.runtime}
            year={movie.release_date}
            genres={JSON.stringify(movie.genres)}
            description_intro={movie.overview}
            url={movie.homepage}
            backdropPath={movie.backdrop_path}
          />
        </div>
      )}
    </>
  );
}

export default Detail;
