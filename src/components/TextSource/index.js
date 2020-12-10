import React, { useState } from 'react'
import DragText from '../DragText';

const TextSource = (props) => {

    const { texts = [], id } = props;

    const [start, setStart] = useState(0);

    const beforeIndex = () => {
        setStart(start - 1 >= 0 ? start - 1 : 0)
    }
    const afterIndex = () => {
        setStart(start + props.peritem < texts.length ? start + 1 : (texts.length - props.peritem > 0 ? texts.length - props.peritem : 0))
    }

    return (
        <div className="rounded-lg shadow-md mt-6">
            <div className="bg-customPrimary text-white text-center text-2xl rounded-t-lg py-1">Insert Text</div>
            <div className="flex items-center justify-between px-2 py-5">
                <img src="/images/left-icon.png" className="cursor-pointer" onClick={beforeIndex} />
                {texts.slice(start, start + props.peritem).map(text => (
                    <DragText
                        id={text.id}
                        key={text.id}
                        src={text.src}
                        type={text.type}
                        txttype={text.txttype}
                    />
                ))}
                <img src="/images/right-icon.png" className="cursor-pointer" onClick={afterIndex} />
            </div>
        </div>
    )
}

export default TextSource;
