import React, { useEffect, useState } from 'react'
import { makeStyles, Modal, Fade, Button } from '@material-ui/core';
import CustomEditorPreview from '../CustomEditorPreview';
import CustomQuestionPrevew from '../CustomQuestionPreview';
import { apiGetLessonById, apiCreateLessonHistory, apiGetLessonHistoryById } from '../../services/news';
import * as _ from 'lodash';

const TotalPreviewModal = (props) => {

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

    const [page, setPage] = useState(0);
    const [title, setTitle] = useState(null);
    const [data, setData] = useState(
        {
            0: { main: { content: { value: "1" } }, sub: { content: { value: "1" } } },
            1: { main: { content: { value: "1" } }, sub: { content: { value: "1" } } },
            2: { main: { content: { value: "1" } }, sub: { content: { value: "1" } } },
            3: { main: { content: { value: "1" } }, sub: { content: { value: "1" } } },
        }
    );

    const classes = useStyles();

    useEffect(() => {
        getLesson();
    }, [])

    const getLesson = () => {
        if (props.readonly) {
            apiGetLessonHistoryById(props.id)
                .then(res => {
                    if (res) {
                        console.log("=====res", res);
                        setTitle(res.title);

                        let data = JSON.parse(res.content);
                        setData(data.data);
                    }
                })
                .catch(function (err) {
                    console.log("=====error", err);
                })
        } else {
            apiGetLessonById(props.id)
                .then(res => {
                    if (res) {
                        console.log("=====res", res);

                        let data = JSON.parse(res.content);
                        setTitle(data.title);

                        let newdata = data.data;
                        for (var i = 0; i <= 3; i++) {
                            newdata[i].main.content.value = "1";
                            newdata[i].sub.content.value = "1";
                        }
                        setData(newdata);
                    }
                })
                .catch(function (err) {
                    console.log("=====error", err);
                })
        }

    }
    const pageBack = () => {
        setPage(page - 1 >= 0 ? page - 1 : 0);
    }
    const pageAfter = () => {
        setPage(page + 1 < 4 ? page + 1 : 3);
    }
    const handleMainRadioGroup = (event) => {
        console.log(event.target.value);
        let state = _.clone(data);
        delete state[page].main.content.value;
        state[page].main.content.value = event.target.value;
        setData(state);
    }
    const handleSubRadioGroup = (event) => {
        console.log(event.target.value);
        let state = _.clone(data);
        delete state[page].sub.content.value;
        state[page].sub.content.value = event.target.value;
        console.log(state);
        setData(state);
    }
    const dataModify = (data) => {

        var newdata = {};

        newdata.id = props.id;
        newdata.title = title;

        newdata.data = {};

        var index = 0;

        for (index = 0; index < 4; index++) {

            newdata.data[index] = { main: { content: {} }, sub: { content: {} } };

            for (var propMain in data[index].main) {

                if (propMain !== "children") {
                    newdata.data[index].main[propMain] = data[index].main[propMain];
                }

            }

            for (var propSub in data[index].sub) {

                if (propSub !== "children") {
                    newdata.data[index].sub[propSub] = data[index].sub[propSub];
                }

            }
        }

        return newdata;

    }

    const saveLessonHistory = () => {
        console.log("OK");

        apiCreateLessonHistory(dataModify(data))
            .then(res => {
                console.log(res);
                // if (res) {
                //     this.setState({ isSaving: false });
                // }
            })
            .catch(function (error) {
                // Handle Errors here.
                console.log('===== error: ', error);
                // ...
            });
    }

    return (
        <Modal
            open={props.open}
            onClose={props.handlePreviewClose}
            className={classes.modal}
        >
            <Fade in={props.open}>
                <div className={classes.paper}>
                    <div className="w-full flex py-2">
                        <p className="text-2xl mx-auto">{title}</p>
                    </div>
                    <div className="w-full relative">
                        <img src="/images/board-pad.png" alt="board-pad" className="w-full h-full rounded-large" />
                        <div className={`${(data[page].main.type !== undefined && data[page].sub.type !== undefined) ? `flex` : `flex-none`} w-full h-full absolute left-0 top-0 text-center`}>
                            <div className={`${data[page].main.type !== undefined ? `block` : `hidden`} ${data[page].sub.type !== undefined ? `w-1/2` : `w-full`} h-full relative`}>
                                {data !== null && data[page].main.type === "image" &&
                                    <div className="w-full h-full absolute left-0 top-0 flex items-center">
                                        <div className="text-center w-full h-full p-4">
                                            <img src={data[page].main.src} alt="maindata" className="h-full mx-auto" />
                                        </div>
                                    </div>
                                }
                                {data !== null && data[page].main.type === "video" &&
                                    <div className="w-full h-full absolute left-0 top-0 flex items-center">
                                        <div className="text-center w-full h-full p-4">
                                            <video className="h-full mx-auto" autoPlay controls>
                                                <source src={data[page].main.src} type="video/mp4"></source>
                                            </video>
                                        </div>
                                    </div>
                                }
                                {data !== null && data[page].main.type === "text" && data[page].main.txttype === "normal" &&
                                    <div className="w-full h-full absolute left-0 top-0 flex items-center p-4">
                                        <CustomEditorPreview content={data[page].main.content} />
                                    </div>
                                }
                                {data !== null && data[page].main.type === "text" && data[page].main.txttype === "question1" &&
                                    <div className="w-full h-full absolute left-0 top-0 flex items-center p-4">
                                        <CustomQuestionPrevew content={data[page].main.content} onChange={handleMainRadioGroup} />
                                    </div>
                                }
                            </div>
                            <div className={`${data[page].sub.type !== undefined ? `block` : `hidden`} ${data[page].main.type !== undefined ? `w-1/2` : `w-full`} h-full relative`}>
                                {data !== null && data[page].sub.type === "image" &&
                                    <div className="w-full h-full absolute left-0 top-0 flex items-center">
                                        <div className="text-center w-full h-full p-4">
                                            <img src={data[page].sub.src} alt="subdata" className="h-full mx-auto" />
                                        </div>
                                    </div>
                                }
                                {data !== null && data[page].sub.type === "video" &&
                                    <div className="w-full h-full absolute left-0 top-0 flex items-center">
                                        <div className="text-center w-full h-full p-4">
                                            <video className="h-full mx-auto" autoPlay controls>
                                                <source src={data[page].sub.src} type="video/mp4"></source>
                                            </video>
                                        </div>
                                    </div>
                                }
                                {data !== null && data[page].sub.type === "text" && data[page].sub.txttype === "normal" &&
                                    <div className="w-full h-full absolute left-0 top-0 flex items-center p-4">
                                        <CustomEditorPreview content={data[page].sub.content} />
                                    </div>
                                }
                                {data !== null && data[page].sub.type === "text" && data[page].sub.txttype === "question1" &&
                                    <div className="w-full h-full absolute left-0 top-0 flex items-center p-4">
                                        <CustomQuestionPrevew content={data[page].sub.content} onChange={handleSubRadioGroup} />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex py-4 relative">
                        <div className="flex items-center mx-auto">
                            <img src="/images/left-icon.png" className="w-3 h-4 hover:opacity-50 cursor-pointer" alt="left-icon" onClick={pageBack} />
                            <p className="px-8">{page + 1} / 4</p>
                            <img src="/images/right-icon.png" className="w-3 h-4 hover:opacity-50 cursor-pointer" alt="right-icon" onClick={pageAfter} />
                        </div>
                        {page === 3 && props.readonly == false &&
                            <Button variant="contained" color="primary" className="absolute right-8 top-4" onClick={saveLessonHistory}>
                                OK
                            </Button>
                        }
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}
export default TotalPreviewModal;