import { Link } from "react-router-dom";

export function MovieInfo() {
  return (
    <div>
      <p>there's gonna be some info here as well</p>
      <Link to="/">
        <button>go back</button>
      </Link>
    </div>
  );
}
