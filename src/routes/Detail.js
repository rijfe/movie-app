import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "../Detail.module.css";

import { useRecoilValue } from "recoil";
import { getSumary } from "../store/sumary";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    let suma = useRecoilValue(getSumary);


    const getDetail = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json.data.movie);
        setMovie(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        console.log("start");
        getDetail();
    }, []);

    return loading ? <h1>Loading..</h1> : (
        <div style={{
            backgroundImage: `url(${movie.background_image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            backgroundAttachment: "scroll",
            justifyContent:"center",
            alignContent:"center"
        }}>
            <div className={styles.container}>
                <div className={styles.infoContainer}>
                    <div className={styles.coverImg}>
                        <img src={movie.large_cover_image} />
                        <div className={styles.rating}>
                            <h3 style={{ color: 'white', fontSize: 50 }}>{movie.rating}/ 10.0</h3>
                            <h3 style={{ color: 'white', fontSize: 50 }}>{movie.runtime}min</h3>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            <b><h1 style={{ color: 'white', fontSize: 50, top: 0, fontWeight:'bold' }}>{movie.title}({movie.year})</h1></b>
                        </div>
                        <div className={styles.genres}>
                            <ul style={{ lifeStyle: "none" }}>
                                {movie?.genres.map((data) => { return <li style={{ color: 'white', fontSize: 30, float: "left", marginLeft: 50 }}>{data}</li> })}
                            </ul>
                        </div>
                        <div className={styles.summary}>
                            <h3 style={{ color: 'white', fontSize: 30 }}>{suma}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;