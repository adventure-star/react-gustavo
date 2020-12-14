import React from 'react'
import Draggable from '../Draggable/Draggable';

const DragAnimation = (props) => {
    return (
        // <Draggable dndType="image" {...props}>
        <img src={props.src} alt="animation" className={`cursor-pointer hover:opacity-75`} />
        // </Draggable>
    )
}

export default DragAnimation;