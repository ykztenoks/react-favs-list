import { Routes, Route } from "react-router-dom";
import { CreateList } from "./pages/CreateList";
import { ListInfo } from "./pages/ListInfo";
import { MovieInfo } from "./pages/MovieInfo";
import { Home } from "./pages/Home";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-list" element={<CreateList />} />
        <Route path="/list-info/:id" element={<ListInfo />} />
        <Route path="/movie-info" element={<MovieInfo />} />
      </Routes>
    </div>
  );
}

export default App;
