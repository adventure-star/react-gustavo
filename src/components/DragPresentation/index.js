import React from 'react'
import Draggable from '../Draggable/Draggable';

const DragPresentation = (props) => {
    return (
        // <Draggable dndType="image" {...props}>
        <img src={props.src} alt="presentation" className={`w-15 h-15 rounded-lg cursor-pointer hover:opacity-75`} />
        // </Draggable>
    )
}

export default DragPresentation;