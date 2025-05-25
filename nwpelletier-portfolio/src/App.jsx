import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Work from "./pages/Work";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
