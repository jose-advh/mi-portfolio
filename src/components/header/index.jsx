import { GoPerson } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { RiMailAiLine } from "react-icons/ri";
import { useState, useEffect } from "react";

const pagesItems = [
  {
    title: "Proyectos",
    url: "#",
    icon: FaCode,
    arial: "projects",
  },
  {
    title: "Sobre mí",
    url: "#",
    icon: GoPerson,
    arial: "aboutme",
  },
];

// TO-DO: Cuando se haga scroll aparezca la foto en el nav

const Header = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowPhoto(window.scrollY > window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (id, e) => {
    e.preventDefault();
    const seccion = document.getElementById(id);
    console.log(seccion);
    seccion.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="z-3 w-[100%] flex items-center fixed left-0 right-0 top-4">
      <nav className="w-fit bg-blue-900/75 m-auto rounded-xl shadow shadow-blue-800  flex justify-around py-2 px-6">
        <ul id="nav-list" className="flex gap-9 items-center">
          {showPhoto && (
            <li>
              <a
                href="#presentacion"
                onClick={(e) => handleScroll("presentacion", e)}
              >
                <img
                  src="/imgs/FotoJose.webp"
                  alt="Fotografía de José Díaz"
                  className="w-[24px] rounded"
                />
              </a>
            </li>
          )}
          {pagesItems.map((link) => (
            <li key={link.arial}>
              <a
                href={link.url}
                onClick={(e) => handleScroll(link.arial, e)}
                className="flex gap-3 items-center"
              >
                <link.icon
                  className="filter drop-shadow-lg text-[24px] text-white"
                  alt={link.arial}
                />
                <span className="hidden lg:block text-white hover:text-purple-200">
                  {link.title}
                </span>
              </a>
            </li>
          ))}
          <li key="contact">
            <a
              href="mailto:josearmandodiazh3@gmail.com"
              className="flex gap-3 items-center"
            >
              <RiMailAiLine
                className="filter drop-shadow-lg text-[24px] text-white"
                alt="Contacto"
              />
              <span className="hidden lg:block text-white hover:text-purple-200">
                Contacto
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
