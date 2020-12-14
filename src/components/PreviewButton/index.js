import React from 'react';

const PreviewButton = (props) => {

    return (
        <button className="w-full h-12 sm:w-auto px-2 mx-1" {...props}>
            <div className="flex items-center justify-center">
                <img src="/images/eye.png" alt="eye" className="object-none" />
                <span className="pl-2">Vista Previa</span>
            </div>
        </button>
    )
}

export default PreviewButton;