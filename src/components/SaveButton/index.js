import React, { useState } from 'react';
import ConfirmDialog from '../ConfirmDialog';

const SaveButton = (props) => {

    return (
        <>
            <button className="w-full h-12 sm:w-auto ml-0 sm:ml-8 mt-4 sm:mt-0" onClick={props.onClick}>
                <div className="flex items-center justify-center">
                    <img src="images/save.png" className="object-none" />
                    <span className="pl-2">Guardar</span>
                </div>
            </button>
        </>
    )
}

export default SaveButton;