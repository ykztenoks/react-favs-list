import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../../components/Card";
import { Toaster, toast } from "react-hot-toast";
export function CreateList() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    owner: "",
    description: "",
    movie: [],
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://ironrest.herokuapp.com/tenoks-movies", form);
      toast.success("Sua lista foi criada!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Toaster />
        <div className="d-flex flex-column m-4 mb-5 col-3">
          <h1>Create your own list of favorite movies!</h1>
          <label htmlFor="owner-input">Nome:</label>
          <input
            id="owner-input"
            value={form.owner}
            type="string"
            name="owner"
            onChange={handleChange}
            required
          />
          <label htmlFor="list-description">Descrição da lista:</label>
          <input
            id="list-description"
            value={form.description}
            type="string"
            name="description"
            onChange={handleChange}
          />
          <button className="btn btn-primary mt-3" type="submit">
            Criar lista!
          </button>
          <Link to="/">
            <button className="btn btn-light mt-3 mb-3">Voltar</button>
          </Link>
        </div>
      </form>
      <Card form={form} setForm={setForm} />
    </>
  );
}
