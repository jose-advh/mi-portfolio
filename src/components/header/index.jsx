import { GoPerson } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { RiMailAiLine } from "react-icons/ri";

const pagesItems = [
  {
    title: "Projects",
    url: "/",
    icon: FaCode,
    arial: "projects",
  },
  {
    title: "About me",
    url: "/",
    icon: GoPerson,
    arial: "aboutme",
  },
  {
    title: "Contact",
    url: "/",
    icon: RiMailAiLine,
    arial: "contact",
  },
];

const Header = () => {
  return (
    <header className="w-95 lg:w-fit bg-blue-900/75 m-auto rounded-md shadow-lg shadow-blue-900 fixed left-0 right-0">
      <nav className="flex justify-around py-2 px-6">
        <ul className="flex gap-5 items-center">
          {pagesItems.map((link) => (
            <li key={link.arial}>
              <a href={link.url}>
                <span className="hidden lg:block text-white hover:text-purple-200">
                  {link.title}
                </span>
                <link.icon className="lg:hidden filter drop-shadow-lg text-[24px] text-white" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
