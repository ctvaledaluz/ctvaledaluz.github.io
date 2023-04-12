import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/template/navbar";
import TextoTeste from "./components/testes/texto";
import Root from "./routes/root";
import About from "./routes/about";
import Footer from "./components/template/footer";

export default function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="about" element={<About />} />
            <Route path="help" element={<TextoTeste />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}
// template e root router da aplicação
