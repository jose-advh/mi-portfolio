import { GoPerson } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { RiMailAiLine } from "react-icons/ri";

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

const Header = () => {
  return (
    <header className="w-fit bg-blue-900/75 m-auto rounded-xl fixed left-0 right-0">
      <nav className="flex justify-around py-2 px-6">
        <ul className="flex gap-9 items-center">
          {pagesItems.map((link) => (
            <li key={link.arial}>
              <a href={link.url} className="flex gap-3 items-center">
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
