import React, { useState, useEffect } from 'react';

const EditToggle = (props) => {

    const [state, setState] = useState(true);

    useEffect(() => {
        props.onChange(state);
    }, [state])

    return (
        <div className="w-full sm:w-48 flex justify-between h-12 rounded-md bg-customYellow" style={{ padding: "2px" }}>
            <button className={`${state ? `bg-white` : `bg-transparent`} rounded-md w-1/2 h-full flex items-center text-center`} onClick={() => {setState(true)}}>
                <span className="w-full">Editar</span>
            </button>
            <button className={`${!state ? `bg-white` : `bg-transparent`} rounded-md w-1/2 h-full bg-transparent flex items-center text-center`} onClick={() => {setState(false)}}>
                <span className="w-full">Ver</span>
            </button>
        </div>
    )
}

export default EditToggle;