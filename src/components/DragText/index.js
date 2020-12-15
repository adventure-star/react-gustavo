import React from 'react'
import Draggable from '../Draggable/Draggable';

const DragText = (props) => {
    return (
        <Draggable dndType="image" {...props}>
            <img src={props.src} alt="dragtextimage" className={`rounded-lg cursor-pointer hover:opacity-75 hover:shadow-outline`} style={{maxWidth: "74px", maxWidth: "74px"}}/>
        </Draggable>
    )
}

export default DragText;