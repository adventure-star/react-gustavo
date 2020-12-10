import React, { useState } from 'react'
import DragLinkVideo from '../DragLinkVideo';

const LinkVideoSource = (props) => {

    const { linkvideos = [], id } = props;

    const [start, setStart] = useState(0);

    const beforeIndex = () => {
        setStart(start - 1 >= 0 ? start - 1 : 0)
    }
    const afterIndex = () => {
        setStart(start + props.peritem < linkvideos.length ? start + 1 : (linkvideos.length - props.peritem > 0 ? linkvideos.length - props.peritem : 0 ))
    }

    return (
        <div className="rounded-lg shadow-md mt-6">
            <div className="bg-customPrimary text-white text-center text-2xl rounded-t-lg py-2 leading-5">Insert audio-video<br />presentation</div>
            <div className="flex items-center justify-around px-2 py-5">
                <img src="/images/left-icon.png" className="cursor-pointer" onClick={beforeIndex}/>
                {linkvideos.slice(start, start + props.peritem).map(linkvideo => (
                    <DragLinkVideo
                        id={linkvideo.id}
                        key={linkvideo.id}
                        src={linkvideo.src}
                        type={linkvideo.type}
                    />
                ))}
                <img src="/images/right-icon.png" className="cursor-pointer" onClick={afterIndex}/>
            </div>
        </div>
    )
}

export default LinkVideoSource;
