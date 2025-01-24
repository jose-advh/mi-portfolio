import { MdCallMissedOutgoing } from "react-icons/md";
import { FiAlignCenter } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { RiMailAiLine } from "react-icons/ri";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

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

const mediaLinks = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/jos%C3%A9-d%C3%ADaz-3074b9316/",
    icon: FaLinkedin,
  },
  {
    title: "GitHub",
    url: "https://github.com/jose-advh",
    icon: FaGithubSquare,
  },
];

const Header = () => {
  return (
    <header className="w-full lg:w-2/4 m-auto bg-purple-900/50 rounded-md shadow-lg shadow-purple-900">
      <nav className="flex justify-around py-2 px-6">
        <ul className="flex gap-5 items-center">
          {pagesItems.map((link) => (
            <li key={link.arial}>
              <a className="hover:text-purple-900" href={link.url}>
                <span className="hidden lg:block text-white">{link.title}</span>
                <link.icon className="lg:hidden filter drop-shadow-lg text-[24px] text-white" />
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex gap-5">
          {mediaLinks.map((link) => (
            <li key={link.arial}>
              <a
                className="flex items-center gap-2 hover:text-purple-900"
                href={link.url}
              >
                <span className="hidden lg:block text-white">{link.title}</span>
                <link.icon className="lg:hidden filter drop-shadow-lg text-[24px] text-white" />
                <MdCallMissedOutgoing className="hidden lg:block text-white" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
