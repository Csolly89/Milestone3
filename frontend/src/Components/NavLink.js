import { Link } from "react-router-dom";

const NavLink = ({ href, title }) => {
    return (
        <Link to={href} className="block py-2 pl-3 pr-4 text-[#6A040F] sm:text-xl rounded md:p-0 hover:text-[#D00000] ">
            {title}
        </Link>
    )
}

export default NavLink