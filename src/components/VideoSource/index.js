import React, { useState } from 'react'
import DragVideo from '../DragVideo';

const VideoSource = (props) => {

    const { videos = [] } = props;

    const [start, setStart] = useState(0);

    const beforeIndex = () => {
        setStart(start - 1 >= 0 ? start - 1 : 0)
    }
    const afterIndex = () => {
        setStart(start + props.peritem < videos.length ? start + 1 : (videos.length - props.peritem > 0 ? videos.length - props.peritem : 0))
    }

    return (
        <div className="rounded-lg shadow-md mt-6">
            <div className="bg-customPrimary text-white text-center text-2xl rounded-t-lg py-1">Inserta videos</div>
            <div className="flex items-center justify-between px-2 py-5">
                <img src="/images/left-icon.png" alt="left-icon" className="cursor-pointer" onClick={beforeIndex} />
                {videos.slice(start, start + props.peritem).map(video => (
                    <DragVideo
                        id={video.id}
                        key={video.id}
                        src={video.src}
                        dndType="image"
                        type={video.type}
                    />
                ))}
                <img src="/images/right-icon.png" alt="right-icon" className="cursor-pointer" onClick={afterIndex} />
            </div>
        </div>
    )
}

export default VideoSource;
