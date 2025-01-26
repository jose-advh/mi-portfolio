import "./App.css";
import Header from "./components/header";
import Projects from "./components/Projects";
import Presentacion from "./components/Presentacion";

function App() {
  return (
    <>
      <Header />
      <main className="lg:w-[85%] m-auto">
        <Presentacion />
        <Projects />
      </main>
    </>
  );
}

// Fixed

export default App;
