import React from 'react';

const TitleInput = (props) => {

    return (
        <div className="ml-0 sm:ml-8 relative flex items-center border border-gray-300 rounded-lg bg-white shadow-sm mt-4 sm:mt-0">
            <span className="absolute text-black pl-4">Titulo:</span>
            <input
                {...props}
                className="w-full sm:w-48 h-12 rounded-lg focus:shadow-outline bg-white pr-2 pl-22"
            />
        </div>
    )
}

export default TitleInput;