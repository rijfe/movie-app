import PropType from "prop-types";
import { Link } from "react-router-dom";

function Movie({coverImg, title, year, summary, genres, id}) {
    return (
        <div >
            <img src={coverImg} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}({year})</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    coverImg: PropType.string.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    genres: PropType.arrayOf(PropType.string).isRequired,
    year: PropType.number.isRequired,
    id: PropType.number.isRequired
}

export default Movie;