import React from 'react'
import Draggable from '../Draggable/Draggable';

const DragImage = (props) => {
    return (
        <Draggable dndType="image" {...props}>
            <img src={props.src} alt="dragimage" className={`w-74 h-74 rounded-lg cursor-pointer hover:opacity-75`} />
        </Draggable>
    )
}

export default DragImage;