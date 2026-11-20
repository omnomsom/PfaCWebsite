import { lazy, Suspense, useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import LoadingAnimation from "./components/LoadingAnimation";

const Gallery = lazy(() => import("./pages/Gallery"));
const Animal = lazy(() => import("./pages/Animal"));

function ScrollToTop() {
  const { hash, key } = useLocation();

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [hash, key]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<LoadingAnimation />}>
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
