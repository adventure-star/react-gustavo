import React from 'react'
import Draggable from '../Draggable/Draggable';

const DragVideo = (props) => {
    return (
        <Draggable id={props.id} key={props.id} dndType="image" {...props}>
            <video className={`w-74 h-74 cursor-pointer hover:opacity-75 hover:shadow-outline`}>
                <source src={props.src} type="video/mp4"></source>
            </video>
        </Draggable>
    )
}

export default DragVideo;