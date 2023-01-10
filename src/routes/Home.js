import { useState, useEffect } from "react";
import Movie from "../components/movie";
import styles from "../App.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
        ).json();
        console.log(json.data.movies);
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
        document.title = "Movie!"
    }, []);

    return (
        <div >
            <h1 className={styles.title}>Movie</h1>
            {loading ? <h1 className={styles.title}>Loading...</h1> :
                (<div className={styles.grid}>
                    {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                year={movie.year}
                                coverImg={movie.medium_cover_image}
                                rating={movie.rating}
                            />
                    ))}
                </div>)
            }
        </div>
    );
}

export default Home;