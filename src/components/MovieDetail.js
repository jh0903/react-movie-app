import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";

function MovieDetail({
  coverImg,
  title,
  genres,
  url,
  like_count,
  rating,
  runtime,
  year,
  description_intro,
}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.description}>
            <img src={coverImg} className={styles.img} alt="coverImage"></img>
            <div style={{ width: "100%" }}>
              <h1 className={styles.title}>{title}</h1>
              <div className={styles.info}>
                <p>{year} </p> &nbsp;
                <p>{runtime} min </p>&nbsp;
                <p>⭐ {rating} </p>&nbsp;
                <p>❤️ {like_count} </p>
              </div>

              <p className={styles.genre}>
                {genres.map((g) => (
                  <li className={styles.li}>{g}</li>
                ))}
              </p>
              <p>
                {description_intro.length <= 800
                  ? description_intro
                  : `${description_intro.slice(0, 800)}...`}
              </p>
              <a href={url} className={styles.btn}>
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  description_intro: PropTypes.string.isRequired,
};

export default MovieDetail;
