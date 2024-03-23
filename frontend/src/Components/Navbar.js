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
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
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