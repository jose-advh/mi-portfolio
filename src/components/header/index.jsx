import { GoPerson } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { RiMailAiLine } from "react-icons/ri";
import { useState, useEffect } from "react";

const pagesItems = [
  {
    title: "Projects",
    url: "#",
    icon: FaCode,
    arial: "projects",
  },
  {
    title: "About me",
    url: "#",
    icon: GoPerson,
    arial: "aboutme",
  },
  {
    title: "Contact",
    url: "#",
    icon: RiMailAiLine,
    arial: "contact",
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
    <header className="z-3 w-fit bg-blue-900/75 m-auto rounded-xl fixed left-0 right-0 top-4 shadow shadow-blue-800">
      <nav className="flex justify-around py-2 px-6">
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
