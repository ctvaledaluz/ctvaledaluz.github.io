import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/navbar/navbar";
import TextoTeste from "./components/testes/texto";
import Root from "./routes/root";
import About from "./routes/about";

function App() {
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
      </div>
    </>
  );
}

export default App;
