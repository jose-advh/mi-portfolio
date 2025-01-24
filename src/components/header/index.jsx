import { MdCallMissedOutgoing } from "react-icons/md";
  
const pagesItems = [
    {
        title: 'Projects',
        url: '/',
        arial: 'projects'
    },
    {
        title: 'About me',
        url: '/',
        arial: 'aboutme'
    },
    {
        title: 'Contact',
        url: '/',
        arial: 'contact'
    }
]  

const mediaLinks = [
    {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/jos%C3%A9-d%C3%ADaz-3074b9316/'
    },
    {
        title: 'GitHub',
        url: 'https://github.com/jose-advh'
    }
]

const Header = () => {

    return (
        <header className="w-3/4 m-auto bg-gray-400 rounded-md">
            <nav className="flex justify-around p-4">
                <ul className="flex gap-5">
                    {pagesItems.map((link) => (
                        <li key={link.arial}>
                            <a 
                                className="hover:text-purple-900"
                                href={link.url}
                            >
                                {link.title} 
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
                                target="_blank"
                            >
                                {link.title} <MdCallMissedOutgoing />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header