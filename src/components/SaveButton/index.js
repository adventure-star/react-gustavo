import React, { useState } from 'react';
import ConfirmDialog from '../ConfirmDialog';

const SaveButton = (props) => {

    return (
        <>
            <button className="w-full h-12 sm:w-auto px-0 sm:px-2 mx-0 sm:mx-1 mt-4 sm:mt-0" onClick={props.onClick}>
                <div className="flex items-center justify-center">
                    <img src="/images/save.png" className="object-none" />
                    <span className="pl-2">Guardar</span>
                </div>
            </button>
        </>
    )
}

export default SaveButton;