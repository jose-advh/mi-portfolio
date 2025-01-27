import "./App.css";
import Header from "./components/header";
import Projects from "./components/Projects";
import Presentacion from "./components/Presentacion";
import Aboutme from "./components/Aboutme";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col md:gap-8 lg:w-[85%] m-auto">
        <Presentacion />
        <Projects />
        <Aboutme />
      </main>
    </>
  );
}

// Fixed

export default App;
