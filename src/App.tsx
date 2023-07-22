import { Routes, Route } from "react-router-dom";

import Nav from "./components/template/navbar";
import Footer from "./components/template/footer";

import Index from "../index";
import About from "../about";
import Help from "../help";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="help" element={<Help />} />
          </Routes>
        <Footer />
      </div>
    </>
  );
}
// template e root router da aplicação
