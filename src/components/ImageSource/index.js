import React, { useState } from 'react'
import DragImage from '../DragImage';

const ImageSource = (props) => {

    const { images = [], id } = props;

    const [start, setStart] = useState(0);

    const beforeIndex = () => {
        setStart(start - 1 >= 0 ? start - 1 : 0)
    }
    const afterIndex = () => {
        setStart(start + props.peritem < images.length ? start + 1 : (images.length - props.peritem > 0 ? images.length - props.peritem : 0 ))
    }

    return (
        <div className="rounded-lg shadow-md mt-6">
            <div className="bg-customPrimary text-white text-center text-2xl rounded-t-lg py-1">Insert Images</div>
            <div className="flex items-center justify-around px-2 py-5">
                <img src="/images/left-icon.png" className="cursor-pointer" onClick={beforeIndex}/>
                {images.slice(start, start + props.peritem).map(image => (
                    <DragImage
                        id={image.id}
                        key={image.id}
                        src={image.src}
                        type={image.type}
                    />
                ))}
                <img src="/images/right-icon.png" className="cursor-pointer" onClick={afterIndex}/>
            </div>
        </div>
    )
}

export default ImageSource;
