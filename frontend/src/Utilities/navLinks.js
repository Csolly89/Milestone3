import { ShoppingCartIcon} from "@heroicons/react/24/solid"

const navLinks = [
    {
        title: "Food",
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
        title: "Reservation",
        path: "/reservation",
    },
    {
        title: "Login",
        path: "/login",
    },
    {
        title: <ShoppingCartIcon className="h-5 w-5" />,
        path: "/curbside",
    },
]

export default navLinks