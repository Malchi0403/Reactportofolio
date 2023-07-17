import { images } from "../data"
import { Navbar } from "./Navbar"
import { Socials } from "./Socials"
const Header = () => {

    return (
        <header className="h-[68px] bg-black items-center fixed top-0 w-full text-white z-10">
            <div className="container mx-auto h-full flex items-center justify-center lg:justify-between ">
                <img src={images[1].iconMe.MyIcon} alt="logo" className="w-12 h-12 cursor-pointer rounded-full hidden md:block md:mx-8 lg:block outline outline-offset-2 outline-stone-200  hover:outline-fuchsia-500" />
                <Navbar />
                <Socials />
            </div>
        </header>
    )
}

export default Header
