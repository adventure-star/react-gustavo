import React from 'react';
import "./index.css"
import { Link } from 'react-router-dom';


const WithHeaderLayout = (props) => {

    const { children: children, ...rest } = props;

    return (
        <>
            <div className="w-full bg-customGray rounded-none lg:rounded-tl-large flex-none md:flex items-center px-16 justify-between py-3 h-auto md:h-86">
                <div className="flex w-auto md:w-350 relative shadow-md rounded-2xl mb-4 md:mb-0">
                    <span className="w-10 h-10 absolute left-0 bg-customPurple flex items-center rounded-lg" style={{ zIndex: "1" }}>
                        <img src="/images/search-icon.png" className="mx-auto" />
                    </span>
                    <input type="text" className="w-full h-10 rounded-lg pl-16 text-lg font-custom-light focus:shadow-outline border border-gray-300" placeholder="Search..." />
                </div>
                <div className="flex items-center justify-between md:justify-start">
                    <Link to="/lesson/new">
                        <button className="bg-customYellow px-1 py-2 leading-snug font-custom-bold text-lg text-black flex items-center rounded-lg mx-0 md:mx-6">Nueva lección</button>
                    </Link>
                    <button className="bg-customYellow w-10 h-10 rounded-full flex items-center">
                        <img src="/images/account.png" className="mx-auto" />
                    </button>
                </div>
            </div>
            <div className="px-15 py-8">
                {children}
            </div>
        </>
    )
}

export default WithHeaderLayout;
