import React from 'react'

const CustomEditorPreview = (props) => {
    return (
        <div className="w-full max-h-full flex">
            <p style={{
                fontFamily: props.content.fontfamily,
                fontSize: props.content.fontsize,
                color: props.content.textcolor,
                backgroundColor: props.content.bgcolor,
            }} className="mx-auto overflow-auto">
                {props.content.title}
            </p>
        </div>
    )
}
export default CustomEditorPreview;