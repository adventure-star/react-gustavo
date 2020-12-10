import React, { useState } from 'react';

const PreviewButton = () => {

    return (
        <button className="w-full h-12 sm:w-auto">
            <div className="flex items-center justify-center">
                <img src="images/eye.png" className="object-none" />
                <span className="pl-2">Vista Previa</span>
            </div>
        </button>
    )
}

export default PreviewButton;