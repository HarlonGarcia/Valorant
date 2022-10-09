import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ScrollButton from "./components/ScrollButton";
import ScrollIndicator from "./components/ScrollIndicator";
import Agent from "./pages/Agent/Agent";
import Agents from "./pages/Agents/Agents";
import Home from "./pages/Home/Home";

function App() {
  // class="dark"

  return (
    <BrowserRouter>
      <NavBar />
      <ScrollIndicator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="agents" element={<Agents />} />
        <Route path="agents/:id" element={<Agent />} />
      </Routes>
      <ScrollButton />
    </BrowserRouter>
  );
}

export default App;
