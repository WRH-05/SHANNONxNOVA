import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RegisterPage from "./pages/RegisterPage";
import Footer from "./components/Footer";
import InfiniteIceCreamScroll from "./pages/infinitescroll";
import TransitionBand from "./pages/separation-band";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/infinite" element={<InfiniteIceCreamScroll />} />
          <Route path="/band" element={<TransitionBand />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;