import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function ListInfo() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/tenoks-movies/${id}`
        );
        setUser(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);
  console.log(user);
  console.log(id);

  return (
    <div className="d-flex flex-column m-4 mb-5 col-3">
      <h1>{user.owner}</h1>
      <h4>{user.description}</h4>
      <Link to="/">
        <button className="btn btn-primary mb-3 mt-3">Voltar pra home</button>
      </Link>
    </div>
  );
}
