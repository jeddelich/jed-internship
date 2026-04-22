import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/UI/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Explore = lazy(() => import("./pages/Explore"));
const Author = lazy(() => import("./pages/Author"));
const ItemDetails = lazy(() => import("./pages/ItemDetails"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/author/:id" element={<Author />} />
          <Route path="/item-details/:id" element={<ItemDetails />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
