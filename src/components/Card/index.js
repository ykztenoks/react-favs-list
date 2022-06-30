import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Card(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=5de67e5945d3343207e24f2e0a3863fe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
        );
        setMovie(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, []);

  return movie.map((currentElement) => {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${currentElement.poster_path}`}
            className="card-img-top"
            alt="poster"
          />
          <div className="card-body">
            <h5 className="card-title">{currentElement.original_title}</h5>
            <p className="card-text">{currentElement.overview}</p>
            <Link to="/" className="btn btn-primary">
              Add
            </Link>
          </div>
        </div>
      </div>
    );
  });
}
