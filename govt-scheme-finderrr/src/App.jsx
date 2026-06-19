import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Home from "./pages/Home";
import Schemes from "./pages/Schemes";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import SchemeDetails from "./pages/SchemeDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/schemes" element={<Schemes />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/about" element={<About />} />

        <Route path="/scheme/:id" element={<SchemeDetails />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />

      <ScrollToTopButton />

    </BrowserRouter>
  );
}

export default App;