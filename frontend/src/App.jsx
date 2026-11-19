import Home from "../src/pages/Home";
import Header from "./components/Header";
import Gallery from "../src/pages/Gallery";
import Animal from "../src/pages/Animal";
import Admin from "../src/pages/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/animal/:id" element={<Animal />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </>
  );
}
