import React, { useRef } from 'react'
import ColorPicker from 'material-ui-color-picker';

const BGColorPicker = (props) => {
    const ref = useRef(null);

    const handleClick = () => {
        ref.current.children[0].children[0].click();
    }
    return (
        <>
            <button className="ml-2 border border-blue-400 rounded-sm" disabled={props.disabled} onClick={handleClick}>
                <div className="w-6 h-6 m-1" style={{ backgroundColor: props.value !== undefined ? props.value : "white" }}>
                </div>
            </button>
            <div ref={ref}>
                <ColorPicker name="bgcolor" value={props.value} onChange={color => props.onChange(color)} style={{ display: "none" }} />
            </div>
        </>
    )
}
export default BGColorPicker;