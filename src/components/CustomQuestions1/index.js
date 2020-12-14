import React, { Component } from 'react'
import FontSelect from '../FontSelect';
import FontSizeSelect from '../FontSizeSelect';
import TextColorPicker from '../TextColorPicker';
import BGColorPicker from '../BGColorPicker';

class CustomQuestions1 extends Component {

  constructor(props) {
    super(props)
  }

  handleSelect = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.props.onChange([name, value]);
  }
  handleTextColor = (color) => {
    if (color !== undefined) {
      this.props.onChange(["textcolor", color]);
    }
  }
  handleBGColor = (color) => {
    if (color !== undefined) {
      this.props.onChange(["bgcolor", color]);
    }
  }

  render() {
    return (
      <div className="w-full m-4 bg-green-500 border rounded-lg p-4" >
        <div className="w-full">
          <div className="flex items-center">
            <FontSelect disabled={!this.props.editable} value={this.props.content.fontfamily} onChange={this.handleSelect} />
            <FontSizeSelect disabled={!this.props.editable} value={this.props.content.fontsize} onChange={this.handleSelect} />
            <TextColorPicker disabled={!this.props.editable} value={this.props.content.textcolor} onChange={this.handleTextColor} />
            <BGColorPicker disabled={!this.props.editable} value={this.props.content.bgcolor} onChange={this.handleBGColor} />
          </div>
        </div>
        <div className="w-full flex items-center">
          <span className="leading-4 w-28 text-white">
            Nombre de la<br /> pregunta
        </span>
          <div className="w-full">
            <textarea
              name="title"
              className={`w-full h-16 mt-2 xl:mt-4 mb-2 xl:mb-4 p-2 border rounded-md`}
              style={{
                fontFamily: this.props.content.fontfamily !== undefined ? this.props.content.fontfamily : "Arial",
                fontSize: this.props.content.fontsize !== undefined ? this.props.content.fontsize : "12px",
                color: this.props.content.textcolor !== undefined ? this.props.content.textcolor : "black",
                backgroundColor: this.props.content.bgcolor !== undefined ? this.props.content.bgcolor : "white",
                resize: "none"
              }}
              onChange={this.handleSelect}
              value={this.props.content.title !== undefined ? this.props.content.title : ""}
              disabled={!this.props.editable}
            >
            </textarea>
          </div>
        </div>
        <div className="w-full flex items-center my-1">
          <span className="w-28 text-white">Respuesta 1</span>
          <input
            name="answer1"
            type="text"
            className="w-full h-8 p-2 border rounded-md"
            value={this.props.content.answer1}
            onChange={this.handleSelect}
            disabled={!this.props.editable}
          />
        </div>
        <div className="w-full flex items-center my-1">
          <span className="w-28 text-white">Respuesta 2</span>
          <input
            name="answer2"
            type="text"
            className="w-full h-8 p-2 border rounded-md"
            value={this.props.content.answer2}
            onChange={this.handleSelect}
            disabled={!this.props.editable}
          />
        </div>
        <div className="w-full flex items-center my-1">
          <span className="w-28 text-white">Respuesta 3</span>
          <input
            name="answer3"
            type="text"
            className="w-full h-8 p-2 border rounded-md"
            value={this.props.content.answer3}
            onChange={this.handleSelect}
            disabled={!this.props.editable}
          />
        </div>
      </div>
    )
  }


}

export default CustomQuestions1;