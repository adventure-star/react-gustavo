import React, { useEffect } from 'react'
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core'

const CustomQuestionPrevew = (props) => {
    useEffect(() => {
        console.log(props);
    }, [])
    return (
        <>
            <div className="w-full max-h-full px-4 py-8 overflow-y-auto">
                <div className="flex">
                    <p style={{
                        fontFamily: props.content.fontfamily,
                        fontSize: props.content.fontsize,
                        color: props.content.textcolor,
                        backgroundColor: props.content.bgcolor,
                    }} className="mx-auto">
                        {props.content.title}
                    </p>
                </div>
                <RadioGroup name="answers" value={props.content.value} className="mx-auto w-4/5 mt-4" onChange={props.onChange}>
                    <FormControlLabel value="1" checked={props.content.value === "1"} control={<Radio />} label={props.content.answer1} />
                    <FormControlLabel value="2" checked={props.content.value === "2"} control={<Radio />} label={props.content.answer2} />
                    <FormControlLabel value="3" checked={props.content.value === "3"} control={<Radio />} label={props.content.answer3} />
                </RadioGroup>
            </div>
        </>
    )
}
export default CustomQuestionPrevew;