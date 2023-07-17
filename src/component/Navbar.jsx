import { navigation } from "../data"
import { Link } from "react-scroll"
export const Navbar = () => {

    return (
        <nav>
            <ul className="flex space-x-8 capitalize text-[15px]">
                {navigation.map((item, index) => {
                    return (
                        <li
                            className="text-white hover:text-fuchsia-500 cursor-pointer"
                            key={index}
                        >
                            <Link to={item.id}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={400}
                                offset={item.id === "home" ? 0 : 80}
                                className="transition-all duration-400">
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
