import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import style from "../css/Home.module.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={style.container}>
      {loading ? (
        <div className={style.loading}>
          <span className={style.loading_title}>Loading...😴😴😴</span>
        </div>
      ) : (
        <div className={style.movie_list}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
