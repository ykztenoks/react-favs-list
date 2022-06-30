import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../../components/Card";
export function CreateList() {
  const [form, setForm] = useState({
    owner: "",
    description: "",
    movie: [{}],
  });

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

  return (
    <div className="d-flex flex-column m-4 mb-5 col-3">
      <h1 className="">Create your own list of favorite movies!</h1>
      <Link to="/">
        <button>go back</button>
      </Link>
      <Card />
    </div>
  );
}
