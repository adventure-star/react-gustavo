import React, { Component } from 'react'
import FontSelect from '../FontSelect';
import FontSizeSelect from '../FontSizeSelect';
import TextColorPicker from '../TextColorPicker';
import BGColorPicker from '../BGColorPicker';

class CustomEditor extends Component {

  constructor(props) {
    super(props)
  }

  handleBGColor = (color) => {
    if (color !== undefined) {
      this.props.onChange(["bgcolor", color]);
    }
  }
  handleTextColor = (color) => {
    if (color !== undefined) {
      this.props.onChange(["textcolor", color]);
    }
  }
  handleSelect = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.props.onChange([name, value]);
  }

  render() {
    return (
      <div className="w-full mx-4 bg-indigo-500 border rounded-lg p-4">
        <div className="flex items-center">
          <FontSelect disabled={!this.props.editable} value={this.props.content.fontfamily} onChange={this.handleSelect} />
          <FontSizeSelect disabled={!this.props.editable} value={this.props.content.fontsize} onChange={this.handleSelect} />
          <TextColorPicker disabled={!this.props.editable} value={this.props.content.textcolor} onChange={this.handleTextColor} />
          <BGColorPicker disabled={!this.props.editable} value={this.props.content.bgcolor} onChange={this.handleBGColor} />
        </div>
        <textarea
          name="title"
          className={`w-full md:h-16 lg:h-24 xl:h-32 my-4 xl:my-8 p-2 border rounded-md`}
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
    )
  }


}

export default CustomEditor;