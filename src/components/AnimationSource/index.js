import React, { useState } from 'react'
import DragAnimation from '../DragAnimation';

const AnimationSource = (props) => {

    const { animations = [], id } = props;

    const [start, setStart] = useState(0);

    const beforeIndex = () => {
        setStart(start - 1 >= 0 ? start - 1 : 0)
    }
    const afterIndex = () => {
        setStart(start + props.peritem < animations.length ? start + 1 : (animations.length - props.peritem > 0 ? animations.length - props.peritem : 0 ))
    }

    return (
        <div className="rounded-lg shadow-md">
            <div className="bg-customPrimary text-white text-center text-2xl rounded-t-lg py-1">Insert Animation</div>
            <div className="flex items-center justify-around px-2 py-5">
                <img src="/images/left-icon.png" className="cursor-pointer" onClick={beforeIndex}/>
                {animations.slice(start, start + props.peritem).map(animation => (
                    <DragAnimation
                        id={animation.id}
                        key={animation.id}
                        src={animation.src}
                        type={animation.type}
                    />
                ))}
                <img src="/images/right-icon.png" className="cursor-pointer" onClick={afterIndex}/>
            </div>
        </div>
    )
}

export default AnimationSource;
