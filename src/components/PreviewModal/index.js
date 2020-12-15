import React from 'react'
import { makeStyles, Modal, Fade } from '@material-ui/core';
import CustomEditorPreview from '../CustomEditorPreview';
import CustomQuestionPrevew from '../CustomQuestionPreview';

const PreviewModal = (props) => {

    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(1, 1, 1),
            width: "70%",
            borderRadius: "58px"
        },
    }));

    const classes = useStyles();

    const maindata = props.data.main;
    const subdata = props.data.sub;

    const maintype = props.data.main.type;
    const subtype = props.data.sub.type;

    return (
        <Modal
            open={props.open}
            onClose={props.handlePreviewClose}
            className={classes.modal}
        >
            <Fade in={props.open}>
                <div className={classes.paper}>
                    <div className="relative">
                        <img src="/images/board-pad.png" alt="board-pad" className="w-full h-full rounded-large" />
                        <div className={`${(maintype !== undefined && subtype !== undefined) ? `flex` : `flex-none`} w-full h-full absolute left-0 top-0 text-center`}>
                            <div className={`${maintype !== undefined ? `block` : `hidden`} ${subtype !== undefined ? `w-1/2` : `w-full`} h-full relative`}>
                                {maintype == "image" &&
                                    <div key={maindata.id} className="w-full h-full absolute left-0 top-0 flex items-center">
                                        <div className="text-center w-full h-full p-4">
                                            <img src={maindata.src} alt="maindata" className="h-full mx-auto rounded-3xl" />
                                        </div>
                                    </div>
                                }
                                {maintype == "video" &&
                                    <div key={maindata.id} className="w-full h-full absolute left-0 top-0 flex items-center">
                                        <div className="text-center w-full h-full p-4">
                                            <video className="h-full mx-auto rounded-lg" autoPlay controls>
                                                <source src={maindata.src} type="video/mp4"></source>
                                            </video>
                                        </div>
                                    </div>
                                }
                                {maintype == "text" && maindata.txttype == "normal" &&
                                    <div className="w-full h-full absolute left-0 top-0 flex items-center p-4">
                                        <CustomEditorPreview content={maindata.content} />
                                    </div>
                                }
                                {maintype == "text" && maindata.txttype == "question1" &&
                                    <div className="w-full h-full absolute left-0 top-0 flex items-center p-4">
                                        <CustomQuestionPrevew content={maindata.content} />
                                    </div>
                                }
                            </div>
                            <div className={`${subtype !== undefined ? `block` : `hidden`} ${maintype !== undefined ? `w-1/2` : `w-full`} h-full relative`}>
                                {subtype == "image" &&
                                    <div key={subdata.id} className="w-full h-full absolute left-0 top-0 flex items-center">
                                        <div className="text-center w-full h-full p-4">
                                            <img src={subdata.src} alt="subdata" className="h-full mx-auto rounded-3xl" />
                                        </div>
                                    </div>
                                }
                                {subtype == "video" &&
                                    <div key={subdata.id} className="w-full h-full absolute left-0 top-0 flex items-center">
                                        <div className="text-center w-full h-full p-4">
                                            <video className="h-full mx-auto" autoPlay controls>
                                                <source src={subdata.src} type="video/mp4"></source>
                                            </video>
                                        </div>
                                    </div>
                                }
                                {subtype == "text" && subdata.txttype == "normal" &&
                                    <div className="w-full h-full absolute left-0 top-0 flex items-center p-4">
                                        <CustomEditorPreview content={subdata.content} />
                                    </div>
                                }
                                {subtype == "text" && subdata.txttype == "question1" &&
                                    <div className="w-full h-full absolute left-0 top-0 flex items-center p-4">
                                        <CustomQuestionPrevew content={subdata.content} />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}
export default PreviewModal;