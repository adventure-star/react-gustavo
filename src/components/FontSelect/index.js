import React from 'react'

const FontSelect = (props) => {
    return (
        <select
            name="fontfamily"
            value={props.value !== undefined ? props.value : "Arial"}
            className="border border-blue-400 rounded-sm"
            {...props}
        >
            <option value="Arial" style={{ fontFamily: "Arial" }}>Arial</option>
            <option value="Courier New" style={{ fontFamily: "Courier New" }}>Courier New</option>
            <option value="Times New Roman" style={{ fontFamily: "Times New Roman" }}>Times New Roman</option>
            <option value="Verdana" style={{ fontFamily: "verdana" }}>Verdana</option>
            <option value="Calibri" style={{ fontFamily: "Calibri" }}>Calibri</option>
        </select>
    )
}
export default FontSelect;