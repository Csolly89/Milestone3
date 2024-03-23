import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import navLinks from "../Utilities/navLinks";

function Navbar() {
    return (
        <div>
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                {navLinks.map((link,index) => (
                    <Link as={Link} >
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    </Link>
                    ))
                }
            </ul>
        </div>
    );
}

export default Navbar