import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import loadingAnimation from "./assets/images/Loading.gif";

const Gallery = lazy(() => import("./pages/Gallery"));
const Animal = lazy(() => import("./pages/Animal"));

export default function App() {
  return (
    <Router>
      <Header />
      <Suspense
        fallback={
          <div className="container grid min-h-[45vh] place-items-center" role="status">
            <img className="w-40" src={loadingAnimation} alt="Loading" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/animal/:id" element={<Animal />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Suspense>
    </Router>
  );
}
