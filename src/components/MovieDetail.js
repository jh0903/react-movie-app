import PropTypes from "prop-types";

function MovieDetail({
  coverImg,
  title,
  genres,
  like_count,
  rating,
  runtime,
  year,
}) {
  return (
    <>
      <div>
        <img src={coverImg}></img>
        <h1>{title}</h1>
        <p>rating: {rating}</p>
        <p>
          {genres.map((g) => (
            <li>{g}</li>
          ))}
        </p>
        <p>{runtime} min</p>
        <p>❤️ {like_count}</p>
        <p>year: {year}</p>
      </div>
    </>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
