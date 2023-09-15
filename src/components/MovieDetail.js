import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";
import { Link } from "react-router-dom";

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
            <img src={coverImg} className={styles.img}></img>
            <div>
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
};

export default MovieDetail;
