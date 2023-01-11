import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "../Detail.module.css";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);


    const getDetail = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json.data.movie);
        setMovie(json.data.movie);
    }

    useEffect(() => {
        getDetail();
    }, []);

    return (
        <div style={{
            backgroundImage:`url(${movie.background_image})`,
        }}>
            <div className={styles.container}>
                <img src={movie.medium_cover_image}/>
                <ul>
                    {movie?.genres.map((data)=>{return <li style={{color:'white'}}>{data}</li>})}
                </ul>
                <h1>{movie.title}({movie.year})</h1>
            </div>
        </div>
    );
}

export default Detail;