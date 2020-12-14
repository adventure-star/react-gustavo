import React, { useRef } from 'react'
import ColorPicker from 'material-ui-color-picker';

const TextColorPicker = (props) => {
    const ref = useRef(null);

    const handleClick = () => {
        ref.current.children[0].children[0].click();
    }
    return (
        <>
            <button className="ml-2 border border-blue-400 rounded-sm" disabled={props.disabled} onClick={handleClick}>
                <div className="relative w-6 h-6 m-1">
                    <span className="absolute font-bold text-xl" style={{ top: "-8px", left: "5px" }}>A</span>
                    <div className="absolute bottom-0 w-6 h-1" style={{ backgroundColor: props.value !== undefined ? props.value : "black" }}>
                    </div>
                </div>
            </button>
            <div ref={ref}>
                <ColorPicker name="textcolor" value={props.value} onChange={(color) => props.onChange(color)} style={{ display: "none" }} />
            </div>
        </>
    )
}
export default TextColorPicker;