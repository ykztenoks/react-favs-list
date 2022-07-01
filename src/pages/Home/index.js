import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export function Home() {
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

  return (
    <div className="d-flex flex-column m-4 mb-5 col-3">
      <h1>MovieLists</h1>
      <p>
        Aqui você pode criar listas dos seus filmes favoritos, filmes para
        assistir mais tarde, ou até mesmo ver listas de outros usuários!
      </p>
      <Link to="/create-list">
        <button className="btn btn-outline-primary">Create list</button>
      </Link>
      {list.map((currentElement) => {
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
