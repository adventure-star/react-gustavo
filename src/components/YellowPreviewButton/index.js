import React, { useState } from 'react';

const YellowPreviewButton = () => {

    return (
        <button className="bg-customYellow h-12 flex items-center rounded-lg px-6 mx-auto">
            <img src="/images/eye-green.png" />
            <span className="pl-2 font-bold font-custom-bold">
                Vista Previa
            </span>
        </button>
    )
}

export default YellowPreviewButton;