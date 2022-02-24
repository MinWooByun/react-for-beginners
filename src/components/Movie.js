import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ id, coverImg, title }) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        {/* 링크는 다른 페이지로 넘어갈 때 새로고침 하는것을 방지해준다. */}
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;
