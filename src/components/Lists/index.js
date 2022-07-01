import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export function Lists() {
  const [list, setList] = useState([{ movie: [{ poster_path: "" }] }]);

  useEffect(() => {
    async function fetchList() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/tenoks-movies"
        );
        setList([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchList();
  }, []);
  return list.map((currentElement) => {
    console.log(currentElement);
    return (
      <div className="d-flex flex-column m-4 mb-5 col-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${currentElement.movie[0].poster_path}`}
            alt="card"
          />
          <div className="card-body">
            <h5 className="card-title">{currentElement.owner}</h5>
            <p className="card-text">{currentElement.description}</p>
            <Link to={`/list-info/${currentElement._id}`}>
              <button className="btn btn-primary">Ver lista</button>
            </Link>
          </div>
        </div>
      </div>
    );
  });
}
