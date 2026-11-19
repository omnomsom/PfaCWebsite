import Home from "../src/pages/Home";
import Header from "./components/Header";
import Gallery from "../src/pages/Gallery";
import Animal from "../src/pages/Animal";
import Inquiry from "./pages/Inquiry";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <p className="bg-sky-100 px-4 py-2 text-center">Proof of concept with fictional animal profiles</p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/animal/:id" element={<Animal />} />

          <Route path="/animal/:id/:kind" element={<Inquiry />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </>
  );
}
