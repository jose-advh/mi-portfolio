import "./App.css";
import Header from "./components/header";
import Projects from "./components/Projects";
import Presentacion from "./components/Presentacion";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import { useState } from "react";
import Certifications from "./components/Certifications";

function App() {
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 lg:w-[85%] m-auto">
        <Presentacion />
        <Projects />
        <Aboutme />
      </main>
      <Footer />
    </>
  );
}

export default App;
{
  /* <Certifications
  modalAbierto={modalAbierto}
  setModalAbierto={setModalAbierto}
  abrirModal={abrirModal}
/> */
}
