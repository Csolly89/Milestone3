import React,{ useState } from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom";
import NavOverlay from './NavOverlay'
import NavLink from "./NavLink";
import navLinks from "../Utilities/navLinks";

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 mt-2'>
                {/* logo/signature of Restaruant thats a link to home page */}
                <Link to={'/'} className="text-2xl md:text-5xl text-white font-semibold">
                    <h1> Sizzle House</h1>
                </Link>
                    {/* hidden menu navbar for smallscreens */}
                <div className="mobile-menu block md:hidden lg:hidden">
                    {!navbarOpen 
                    ? (<button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><Bars3Icon className="h-5 w-5" /></button> )
                    : (<button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><XMarkIcon className="h-5 w-5" /></button> )
                    }
                </div>
                {/* main navbar links */}
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link,index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <NavOverlay links={navLinks} /> : null}
        </nav>
    );
}

export default Navbar