import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LeftSideBar = (props) => {

    const [isExpanded, toggleExpansion] = useState(false);

    var location = useLocation();

    const lastPos = location.pathname.lastIndexOf('/');
    const len = location.pathname.length;
    const pathName = location.pathname.substr(0, lastPos === 0 ? len : lastPos);

    const { children } = props;

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

    const SideBarLinks = links.map((link) => (
        <Link to={link.link} key={link.name} className="relative flex items-center py-6 hover:bg-blue-700">
            <div className="flex-none lg:flex items-center pl-0 lg:pl-8 mx-0 md:mx-auto lg:mx-0">
                <img src="/images/navpicker.png" className={`${pathName == link.link ? `block` : `hidden`} absolute left-0`} />
                <div className="mx-0 md:mx-auto lg:mx-0" style={{ width: "35px" }}>
                    <img src={link.src} className="mx-auto lg:mx-0" />
                </div>
                <p className="text-white pl-6 md:pl-0 lg:pl-3 pt-0 md:pt-2 lg:pt-0 font-custom-medium text-xl">{link.name}</p>
            </div>
        </Link>
    ));
    const HeaderLinks = links.map((link) => (
        <Link to={link.link} key={link.name} className="relative flex items-center py-4 bg-customPrimary hover:bg-blue-700" onClick={() => toggleExpansion(false)}>
            <div className="flex md:block lg:flex items-center pl-10 md:pl-0 lg:pl-10 mx-0 md:mx-auto lg:mx-0">
                <img src="/images/navpicker.png" className={`${pathName == link.link ? `block` : `hidden`} absolute left-0`} />
                <img src={link.src} className="mx-0 md:mx-auto lg:mx-0" />
                <p className="text-white pl-6 md:pl-0 lg:pl-6 pt-0 md:pt-2 lg:pt-0 font-custom-medium text-lg">{link.name}</p>
            </div>
        </Link>
    ));

    return (
        <div className="w-full flex bg-customPrimary relative">
            <img src="images/background.png" className="hidden md:block absolute left-0 top-0 h-full" style={{ zIndex: "1", opacity: "0.8" }} />
            <div className="flex-none md:flex w-full" style={{ zIndex: "10" }}>
                <div className="w-full md:w-1/5 pt-3 pb-3 md:pt-20 md:pb-0 md:h-auto" style={{ minHeight: "64px" }}>
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
                    <div className="hidden md:block">
                        {SideBarLinks}
                    </div>
                    <div className={`${isExpanded ? `block` : `hidden`} block md:hidden bg-customPrimary md:bg-transparent`}>
                        {HeaderLinks}
                    </div>
                </div>
                <div className="w-full md:w-4/5 bg-white rounded-none md:rounded-tl-large" style={{ zIndex: "2" }}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar;
