import React, { Component } from 'react'
import { Droppable } from '../../components';
import CustomEditor from '../CustomEditor';
import CustomQuestions1 from '../CustomQuestions1';

class SubBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    static getDerivedStateFromProps(props, state) {
        return {
            id: props.media.id,
            type: props.media.type,
            txttype: props.media.txttype
        };
    }

    onChange = (value) => {
        this.props.onChange(["sub", value]);
    }

    render() {
        return (
            <Droppable dndType="image" {...this.props}>
                <div className="relative w-full bg-customLightGray shadow-md" style={{ height: "324px" }}>
                    <div className="w-full h-full absolute left-0 top-0 flex items-center">
                        <div className="text-center w-full pt-8">
                            <img src="/images/drag-img.png" alt="drag-img" className="mx-auto" />
                            <span className="font-bold pt-4">
                                Drag the image and drop
                                <br />
                                on the blanks
                            </span>
                        </div>
                    </div>
                    {this.props.media.type === "image" &&
                        <div key={this.props.media.id} className="w-full h-full absolute left-0 top-0 flex items-center">
                            <div className="text-center w-full h-full">
                                <img src={this.props.media.src} alt="image" className="h-full mx-auto" />
                            </div>
                        </div>
                    }
                    {this.props.media.type === "video" &&
                        <div key={this.props.media.id} className="w-full h-full absolute left-0 top-0 flex items-center">
                            <div className="text-center w-full h-full">
                                <video className="h-full mx-auto" autoPlay controls>
                                    <source src={this.props.media.src} type="video/mp4"></source>
                                </video>
                            </div>
                        </div>
                    }
                    {this.props.media.type === "text" && this.props.media.txttype === "normal" &&
                        <div className="w-full h-full absolute left-0 top-0 flex items-center">
                            <CustomEditor editable={this.props.editable} content={this.props.media.content} onChange={this.onChange} />
                        </div>
                    }
                    {this.props.media.type === "text" && this.props.media.txttype === "question1" &&
                        <div className="w-full h-full absolute left-0 top-0 flex items-center">
                            <CustomQuestions1 editable={this.props.editable} content={this.props.media.content} onChange={this.onChange} />
                        </div>
                    }
                </div>
            </Droppable>
        )
    }

}

export default SubBoard;
