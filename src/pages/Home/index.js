import { Link } from "react-router-dom";
import { Lists } from "../../components/Lists";
export function Home() {
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
      <Lists />
    </div>
  );
}
