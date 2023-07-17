import { social } from "../data"
export const Socials = () => {
    return (
        <div className="hidden lg:block">
            <ul className="flex space-x-6">
                {social.map((item, index) => {
                    return (
                        <li key={index} className={`flex justify-content items-center ${item.color ? item.color : "text-white"} ${item.colorHover ? item.colorHover : 'hover:text-red-500'}`}>
                            <a href={item.href} className="text-base">
                                {item.icon}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
