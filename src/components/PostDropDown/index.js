import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const PostDropDown = () => {

    const [state, setState] = useState(false);
    const stateFalse = () => {
        setState(false);
    }

    return (
        <OutsideClickHandler onOutsideClick={stateFalse}>
            <div className="w-full h-12 sm:w-auto mx-0 sm:mx-3 mt-4 sm:mt-0 relative" style={{ zIndex: "5" }}>
                <button className="flex w-full sm:w-48 items-center justify-between h-full rounded-md bg-customYellow px-4" onClick={() => setState(!state)} >
                    <span className="text-black">Publicar</span>
                    <img src="/images/dropdown-icon.png" alt="dropdown-icon" />
                </button>
                {state &&
                    <div className="w-full sm:w-auto bg-white cursor-pointer shadow-xl rounded-sm">
                        <p className="py-2 hover:bg-gray-400 text-center border-b border-blue-100" onClick={stateFalse}>Item 1</p>
                        <p className="py-2 hover:bg-gray-400 text-center border-b border-blue-100" onClick={stateFalse}>Item 2</p>
                        <p className="py-2 hover:bg-gray-400 text-center border-b border-blue-100" onClick={stateFalse}>Item 3</p>
                        <p className="py-2 hover:bg-gray-400 text-center border-b border-blue-100" onClick={stateFalse}>Item 4</p>
                    </div>
                }
            </div>
        </OutsideClickHandler>
    )
}

export default PostDropDown;