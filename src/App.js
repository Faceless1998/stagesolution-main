import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Service from "./component/service/Service";
import About from "./component/about/About";
import Gallery from "./component/gallery/Gallery";
import Contact from "./component/contact/Contact";
import { Nav } from "./component/nav/Nav";
import './app.css';
import Footer from "./component/footer/Footer";
function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
