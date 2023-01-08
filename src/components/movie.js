import PropType from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, year, genres, id }) {
    return (
        <div >
            <fieldset style={{width:"33%"}}>
                <legend>{title}({year})</legend>
                <img src={coverImg} alt={title} />
                <ul>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </fieldset>

        </div>
    );
}

Movie.propTypes = {
    coverImg: PropType.string.isRequired,
    title: PropType.string.isRequired,
    year:PropType.number.isRequired,
    genres: PropType.arrayOf(PropType.string).isRequired,
    id: PropType.number.isRequired
}

export default Movie;