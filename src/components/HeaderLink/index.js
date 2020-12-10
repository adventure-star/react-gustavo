import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const HeaderLink = () => {

    const [isExpanded, toggleExpansion] = useState(false);

    var location = useLocation();

    const lastPos = location.pathname.lastIndexOf('/');
    const len = location.pathname.length;
    const pathName = location.pathname.substr(0, lastPos == 0 ? len : lastPos);

    const links = [
        {
            name: "Home",
            link: "/home",
            src: "/images/nav-home.png"
        },
        {
            name: "Tablero",
            link: "/board",
            src: "/images/nav-board.png"
        },
        {
            name: "Mis lecciones",
            link: "/mylessons",
            src: "/images/nav-mylessons.png"
        },
        {
            name: "Biblioteca",
            link: "/library",
            src: "/images/nav-library.png"
        },
        {
            name: "Configurar",
            link: "/setup",
            src: "/images/nav-setup.png"
        },
        {
            name: "Salir",
            link: "/getout",
            src: "/images/nav-getout.png"
        }
    ];

    return (
        <>
            <div className="w-full h-12">
                <button
                    className="flex float-right w-10 h-10 items-center px-3 py-2 text-yellow-1 border border-yellow-2 rounded md:hidden mr-4"
                    onClick={() => toggleExpansion(!isExpanded)}
                >
                    <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className={`${isExpanded ? `block` : `hidden`} block md:hidden bg-customPrimary md:bg-transparent`}>
                {links.map((link) => (
                    <Link to={link.link} key={link.name} className="relative flex items-center py-4 hover:bg-blue-700" onClick={() => toggleExpansion(false)}>
                        <div className="flex-none lg:flex items-center pl-0 lg:pl-10 mx-0 md:mx-auto lg:mx-0">
                            <img src="/images/navpicker.png" className={`${pathName == link.link ? `block` : `hidden`} absolute left-0`} />
                            <div className="mx-0 md:mx-auto lg:mx-0" style={{ width: "35px" }}>
                                <img src={link.src} className="mx-auto lg:mx-0" />
                            </div>
                            <p className="text-white pl-6 md:pl-0 lg:pl-6 pt-0 md:pt-2 lg:pt-0">{link.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}


export default HeaderLink;