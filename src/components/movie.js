import PropType from "prop-types";
import { Link } from "react-router-dom";
import styles from "../Button.module.css";
import { useRecoilState } from "recoil";

import {sumaryInfo} from '../store/sumary';

function Movie({ coverImg, title, year, id, sumary }) {
    const [sum, setSum] = useRecoilState(sumaryInfo)
    
    const setInfo = () =>{
        setSum(sumary);
    };

    return (
        <div className={styles.container}>
            <fieldset className={styles.border}>
                <legend className={styles.title}>{title}({year})</legend>
                <Link to={`/movie/${id}`} onClick={setInfo}>
                    <img src={coverImg} alt={title} style={{marginTop:"15px"}} />
                </Link>
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