import React, { useState } from 'react'
import DragPresentation from '../DragPresentation';

const PresentationSource = (props) => {

    const { presentations = [], id } = props;

    const [start, setStart] = useState(0);

    const beforeIndex = () => {
        setStart(start - 1 >= 0 ? start - 1 : 0)
    }
    const afterIndex = () => {
        setStart(start + props.peritem < presentations.length ? start + 1 : (presentations.length - props.peritem > 0 ? presentations.length - props.peritem : 0 ))
    }

    return (
        <div className="rounded-lg shadow-md mt-6">
            <div className="bg-customPrimary text-white text-center text-2xl rounded-t-lg py-2 leading-5">Insert audio-video<br />presentation</div>
            <div className="flex items-center justify-around px-2 py-5">
                <img src="/images/left-icon.png" className="cursor-pointer" onClick={beforeIndex}/>
                {presentations.slice(start, start + props.peritem).map(presentation => (
                    <DragPresentation
                        id={presentation.id}
                        key={presentation.id}
                        src={presentation.src}
                        type={presentation.type}
                    />
                ))}
                <img src="/images/right-icon.png" className="cursor-pointer" onClick={afterIndex}/>
            </div>
        </div>
    )
}

export default PresentationSource;
