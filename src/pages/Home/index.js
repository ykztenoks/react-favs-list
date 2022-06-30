import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>welcome!</h1>
      <Link to="/create-list">
        <button>Create list!</button>
      </Link>
    </div>
  );
}
