import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Agents from "./pages/Agents/Agents";
import Home from "./pages/Home/Home";

function App() {
  // class="dark"

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="agents" element={<Agents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
