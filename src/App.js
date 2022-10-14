import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import { Nav } from "./component/nav/Nav";
import './app.css';
import Portfolio from "./component/portfolio/Portfolio";
import Footer from "./component/footer/Footer";
function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
