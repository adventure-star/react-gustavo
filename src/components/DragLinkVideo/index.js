import React from 'react'
import Draggable from '../Draggable/Draggable';

const DragLinkVideo = (props) => {
    return (
        // <Draggable dndType="image" {...props}>
        <img src={props.src} alt="linkvideo" className={`w-15 h-15 rounded-lg cursor-pointer hover:opacity-75`} />
        // </Draggable>
    )
}

export default DragLinkVideo;