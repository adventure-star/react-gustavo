import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EditToggle from '../../components/EditToggle';
import TitleInput from '../../components/TitleInput';
import PreviewButton from '../../components/PreviewButton';
import SaveButton from '../../components/SaveButton';
import PostDropDown from '../../components/PostDropDown';

const LessonWrapper = (props) => {

    const [isExpanded, toggleExpansion] = useState(false);

    const location = useLocation();

    const lastPos = location.pathname.lastIndexOf('/');
    const len = location.pathname.length;
    const pathName = location.pathname.substr(0, lastPos === 0 ? len : lastPos);

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

    const HeaderLinks = links.map((link) => (
        <Link to={link.link} key={link.name} className="relative flex items-center py-4 bg-customPrimary hover:bg-blue-700" onClick={() => toggleExpansion(false)}>
            <div className="flex md:block lg:flex items-center pl-10 md:pl-0 lg:pl-10 mx-0 md:mx-auto lg:mx-0">
                <img src="/images/navpicker.png" className={`${pathName === link.link ? `block` : `hidden`} absolute left-0`} />
                <img src={link.src} alt="links" className="mx-0 md:mx-auto lg:mx-0" />
                <p className="text-white pl-6 md:pl-0 lg:pl-6 pt-0 md:pt-2 lg:pt-0">{link.name}</p>
            </div>
        </Link>
    ));

    const pages = [
        { id: 0, number: "01", title: "Presentación", maskcolor: "#f8b84a" },
        { id: 1, number: "02", title: "Introducción", maskcolor: "#e08b86" },
        { id: 2, number: "03", title: "Desarrollo", maskcolor: "#8bd6ad" },
        { id: 3, number: "04", title: "Conclusión", maskcolor: "#ee9d66" },
    ]

    const onTitleChange = (event) => {
        props.onTitleChange(event.target.value);
    }

    const onEditableChange = (value) => {
        props.onEditableChange(value);
    }

    return (
        <div className="w-full flex bg-customPrimary relative">
            <img src="/images/background.png" alt="background" className="hidden md:block absolute left-0 top-0 h-full" style={{ zIndex: "1", opacity: "0.8" }} />
            <div className="flex-none md:flex w-full" style={{ zIndex: "10" }}>
                <div className="w-full md:w-1/5 pt-3 pb-3 md:pt-20 md:pb-0 md:h-auto relative" style={{ minHeight: "64px" }}>
                    {/* <img src="/images/bars.png" alt="bars" className="absolute left-8 top-8 cursor-pointer" /> */}
                    <Link to="/">
                        <img src="/images/nav-home.png" alt="nav-home" className="absolute left-8 top-8 cursor-pointer hover:opacity-50" />
                    </Link>
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
                        {HeaderLinks}
                    </div>
                    <div className="grid grid-cols-1 row-gap-12">
                        {pages.map(page => (
                            <div key={page.id} className={`flex items-center hover:bg-blue-400 px-2 pt-4 cursor-pointer ${props.page === page.id ? `bg-blue-400` : `bg-transparent`}`} onClick={() => { props.onChange(page.id) }}>
                                <span className="text-white font-bold pr-2 pb-8">{page.number}</span>
                                <div className="text-center">
                                    <div className="relative">
                                        <img src="/images/panel-base.png" alt="panel-base" className={`rounded-lg`} />
                                        <div className={`${props.page === page.id ? `opacity-25` : `opacity-100`} absolute left-0 top-0 w-full h-full rounded-lg`} style={{ backgroundColor: page.maskcolor }}></div>
                                    </div>
                                    <span className="text-white font-bold leading-loose">{page.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-4/5 bg-white rounded-none md:rounded-tl-large" style={{ zIndex: "2" }}>
                    <div className="w-full bg-customGray rounded-none md:rounded-tl-large flex-none large:flex items-center justify-between px-8 lg:px-16 py-4 large:py-2 text-2xl h-auto large:h-86">
                        <div className="flex-none sm:flex items-center justify-between">
                            <EditToggle onChange={onEditableChange} />
                            <TitleInput disabled={!props.editable} defaultValue={props.title} onChange={onTitleChange} />
                        </div>
                        <div className="flex-none sm:flex items-center justify-between mt-4 sm:mt-8 large:mt-0">
                            <PreviewButton onClick={props.onPreviewClick} />
                            <SaveButton onClick={props.onClick} />
                            <PostDropDown />
                        </div>
                    </div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default LessonWrapper;
