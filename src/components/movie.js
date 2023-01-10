import PropType from "prop-types";
import { Link } from "react-router-dom";
import styles from "../Button.module.css";

function Movie({ coverImg, title, year, rating, id }) {


    return (
        
        <div className={styles.container}>
            <fieldset className={styles.border}>
                <legend className={styles.title}>{title}({year})</legend>
                <Link to={`/movie/${id}`}>
                    <img src={coverImg} alt={title} style={{marginTop:"15px"}} />
                </Link>
                <div className={styles.ratingBox}>
                    <h2 className={styles.rating}>{rating}/10</h2>
                </div>
            </fieldset>
        </div>
    );
}

Movie.propTypes = {
    coverImg: PropType.string.isRequired,
    title: PropType.string.isRequired,
    year:PropType.number.isRequired,
    id: PropType.number.isRequired
}

export default Movie;