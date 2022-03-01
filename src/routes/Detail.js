import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../css/Detail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";

// useParams는 url에 담겨져 오는 params를 받아온다. params는 내가 지정한 변수명으로 넘어온다.

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setGenres(json.data.movie.genres);
    setDescription(json.data.movie.description_full);
  };
  useEffect(() => {
    getMovie();
    setLoading(false);
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...😴😴😴</h1>
      ) : (
        <div className={style.container}>
          <img className={style.image} src={movie.medium_cover_image} />
          <h1>{movie.title}</h1>
          <h2>
            <ul>
              {genres.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </h2>
          {description.split(".").map((item, index) => (
            <h2 key={index}>{item}.</h2>
          ))}
          <h2>
            runtime <FontAwesomeIcon className={style.clock} icon={faClock} />
            {movie.runtime}M
          </h2>
          <h2>
            rating <FontAwesomeIcon className={style.star} icon={faStar} />
            {movie.rating}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Detail;
