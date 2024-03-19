import NavLink from "./NavLink";


const navLinks = [
    {
        title: "Menu",
        path: "/menu",
    },
    {
        title: "Specials",
        path: "/specials",
    },
    {
        title: "Locations",
        path: "/locations",
    },
    {
        title: "Careers",
        path: "/careers",
    },
    {
        title: "Curbside Pick-up",
        path: "/curbside",
    },
]

function Navbar() {
    return (
        <div>
            <ul>
                {navLinks.map((link,index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Navbar