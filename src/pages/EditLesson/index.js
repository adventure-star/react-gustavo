import React, { useState, PureComponent } from 'react';
import YellowPreviewButton from '../../components/YellowPreviewButton';
import Wrapper from './Wrapper';
import { MainBoard } from '../../components';
import ImageSource from '../../components/ImageSource';
import SubBoard from '../../components/SubBoard';
import VideoSource from '../../components/VideoSource';
import TextSource from '../../components/TextSource';
import ConfirmDialog from '../../components/ConfirmDialog';
import { apiDraftCreate, apiGetAllImages, apiGetAllVideos, apiGetAllTexts, apiCreateProject, apiGetAllAnimations, apiGetAllPresentations, apiGetAllLinkVideos } from '../../services/news';
import LoadingOverlay from 'react-loading-overlay';
import { DotLoader } from 'react-spinners';
import AnimationSource from '../../components/AnimationSource';
import PresentationSource from '../../components/PresentationSource';
import LinkVideoSource from '../../components/LinkVideoSource';


class EditLesson extends PureComponent {

    //Set initial State
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            anims: [],
            presentations: [],
            linkvideos: [],
            images: [],
            videos: [],
            texts: [],
            title: "",
            data: {
                0: { main: { content: {} }, sub: { content: {} } },
                1: { main: { content: {} }, sub: { content: {} } },
                2: { main: { content: {} }, sub: { content: {} } },
                3: { main: { content: {} }, sub: { content: {} } },
            },
            modal: false,
            editable: true,
            isLoading: true,
            isSaving: false,
            peritem: 3
        };

        this.onDrop = this.onDrop.bind(this);

        this.handleScreenChange = this.handleScreenChange.bind(this);

        window.addEventListener('resize', this.handleScreenChange);

    }

    handleScreenChange() {
        console.log(window.innerWidth);

        var width = window.innerWidth;
        var peritem = 3;

        if (width >= 1280) { peritem = 3; }
        if (width >= 1000 && width < 1280) { peritem = 2; }
        if (width >= 640 && width < 1000) { peritem = 1; }
        if (width < 640) { peritem = 3; }

        this.setState({ peritem: peritem });
    }

    componentDidMount() {

        console.log("=====id", this.props.match.params.id);

        this.handleScreenChange();

        apiGetAllImages()
            .then(res => {
                console.log("=====res", res);
                if (res) {
                    const images = res.map(v => ({ ...v, panelId: "imgsource" }))
                    this.setState({ images: images });
                }
            })
            .catch(function (error) {
                // Handle Errors here.
                console.log('===== error: ', error);
                // ...
            });
        apiGetAllVideos()
            .then(res => {
                console.log("=====res", res);
                if (res) {
                    const videos = res.map(v => ({ ...v, panelId: "vidsource" }))
                    this.setState({ videos: videos });
                }
            })
            .catch(function (error) {
                // Handle Errors here.
                console.log('===== error: ', error);
                // ...
            });
        apiGetAllTexts()
            .then(res => {
                console.log("=====res", res);
                if (res) {
                    const texts = res.map(v => ({ ...v, panelId: "txtsource" }))
                    this.setState({ texts: texts });
                }
            })
            .catch(function (error) {
                // Handle Errors here.
                console.log('===== error: ', error);
                // ...
            });
        apiGetAllAnimations()
            .then(res => {
                console.log("=====res", res);
                if (res) {
                    const anims = res.map(v => ({ ...v, panelId: "animsource" }))
                    this.setState({ anims: anims });
                }
            })
            .catch(function (error) {
                // Handle Errors here.
                console.log('===== error: ', error);
                // ...
            });
        apiGetAllPresentations()
            .then(res => {
                console.log("=====res", res);
                if (res) {
                    const presentations = res.map(v => ({ ...v, panelId: "pressource" }))
                    this.setState({ presentations: presentations });
                }
            })
            .catch(function (error) {
                // Handle Errors here.
                console.log('===== error: ', error);
                // ...
            });
        apiGetAllLinkVideos()
            .then(res => {
                console.log("=====res", res);
                if (res) {
                    const linkvideos = res.map(v => ({ ...v, panelId: "linkvidsource" }))
                    this.setState({ linkvideos: linkvideos });
                }
            })
            .catch(function (error) {
                // Handle Errors here.
                console.log('===== error: ', error);
                // ...
            });
    }
    componentWillUpdate() {
        this.setState({ isLoading: true });
    }
    componentDidUpdate() {
        this.setState({ isLoading: false })
    }

    onDrop(item, targetId) {

        console.log("===item", item);
        console.log("===targetId", targetId);

        let page = this.state.page;

        var allstates = this.state.data;
        var currentstates = allstates[page];

        if (!(currentstates[targetId].type == item.type && currentstates[targetId].id == item.id)) {

            delete allstates[page];

            currentstates[targetId] = { ...item, panelId: targetId };
            currentstates[targetId].content = {
                title: "Please insert title!",
                fontfamily: "Arial",
                fontsize: "12px",
                textcolor: "black",
                bgcolor: "white",
                answer1: "answer 1",
                answer2: "answer 2",
                answer3: "answer 3",
            };

            console.log("currentstaates", currentstates)

            let newstate = { ...allstates };

            newstate[page] = currentstates;

            console.log("=====new_state", newstate);

            this.setState({ data: newstate });

        }

    }

    onPageChange = (newpage) => {
        console.log("=====new_page", newpage);
        if (this.state.page !== newpage) {
            this.setState({ page: newpage });
        }
    }

    dataModify = (data) => {

        var newdata = {};

        newdata.title = this.state.title;

        var index = 0;

        for (index = 0; index < 4; index++) {

            newdata[index] = { main: { content: {} }, sub: { content: {} } };

            for (var propName in data[index].main) {

                if (propName == "id" || propName == "type" || propName == "txttype") {
                    console.log(data[index].main[propName])
                    newdata[index].main[propName] = data[index].main[propName];

                }
                if (propName == "content") {
                    for (var prop in data[index].main[propName]) {
                        newdata[index].main[propName][prop] = data[index].main[propName][prop]
                    }
                }

            }
            for (var propName in data[index].sub) {

                if (propName == "id" || propName == "type" || propName == "txttype") {
                    console.log(data[index].sub[propName])
                    newdata[index].sub[propName] = data[index].sub[propName];

                }
                if (propName == "content") {
                    for (var prop in data[index].sub[propName]) {
                        newdata[index].sub[propName][prop] = data[index].sub[propName][prop]
                    }
                }

            }
        }

        return newdata;

    }

    onSaveButtonClick = () => {

        this.setState({ modal: true });
        
    }

    saveDraft = () => {

        this.setState({ modal: false });

        console.log("=====state", this.state.data);

        this.setState({ isSaving: true });

        apiCreateProject(this.dataModify(this.state.data))
            .then(res => {
                console.log("=====res", res);
                if (res) {
                    this.setState({ isSaving: false });
                }
            })
            .catch(function (error) {
                // Handle Errors here.
                console.log('===== error: ', error);
                // ...
            });

    }

    getStates = ([panelId, [name, value]]) => {

        console.log("==name", name)
        console.log("==value", value)

        let page = this.state.page;

        var allstates = this.state.data;
        var currentstates = this.state.data[page];
        var mainstates = this.state.data[page][panelId];
        var content = this.state.data[page][panelId].content;

        delete allstates[page];
        delete currentstates[panelId];
        delete mainstates.content;
        delete content[name];

        content[name] = value;
        mainstates.content = content;
        currentstates[panelId] = mainstates;

        var newstates = { ...allstates };
        newstates[page] = currentstates;

        this.setState({ data: newstates });

    }

    onTitleChange = (value) => {
        this.setState({ title: value });
    }

    onEditableChange = (value) => {
        this.setState({ editable: value });
    }

    render() {
        return (
            <LoadingOverlay
                active={this.state.isLoading}
                spinner={<DotLoader />}
                text='Loading...'
            >
                <LoadingOverlay
                    active={this.state.isSaving}
                    spinner={<DotLoader />}
                    text='Saving...'
                >
                    <Wrapper
                        page={this.state.page}
                        title={this.state.title}
                        onTitleChange={this.onTitleChange}
                        onChange={this.onPageChange}
                        onClick={this.onSaveButtonClick}
                        onEditableChange={this.onEditableChange}
                    >
                        <div className="flex-none sm:flex px-2 md:px-6 lg:px-10 py-6 lg:py-10">
                            <div className="w-full sm:w-2/3 px-4 sm:pl-3 sm:pr-0">
                                <MainBoard
                                    id="main"
                                    page={this.state.page}
                                    media={this.state.data[this.state.page].main}
                                    onChange={this.getStates}
                                    onDrop={this.onDrop}
                                    editable={this.state.editable}
                                />
                                <div className="w-full pt-6 pb-2 sm:pt-4 sm:pb-4">
                                    <YellowPreviewButton />
                                </div>
                                <div className="pt-4 sm:pt-10">
                                    <SubBoard
                                        id="sub"
                                        media={this.state.data[this.state.page].sub}
                                        onChange={this.getStates}
                                        onDrop={this.onDrop}
                                        editable={this.state.editable}
                                    />
                                </div>
                                <div className="w-full pt-6 pb-2">
                                    <YellowPreviewButton />
                                </div>
                            </div>
                            <div className="w-full sm:w-1/3 px-4 md:pl-6 lg:pl-10 sm:pr-0 mt-4 sm:mt-0">
                                <AnimationSource
                                    id="animsource"
                                    animations={this.state.anims.filter(t => t.panelId === "animsource")}
                                    peritem={this.state.peritem}
                                />
                                <ImageSource
                                    id="source"
                                    images={this.state.images.filter(t => t.panelId === "imgsource")}
                                    peritem={this.state.peritem}
                                />
                                <TextSource
                                    id="txtsource"
                                    texts={this.state.texts.filter(t => t.panelId === "txtsource")}
                                    peritem={this.state.peritem}
                                />
                                <PresentationSource
                                    id="pressource"
                                    presentations={this.state.presentations.filter(t => t.panelId === "pressource")}
                                    peritem={this.state.peritem}
                                />
                                <VideoSource
                                    id="video"
                                    videos={this.state.videos.filter(t => t.panelId = "vidsource")}
                                    peritem={this.state.peritem}
                                />
                                <LinkVideoSource
                                    id="linkvidsource"
                                    linkvideos={this.state.linkvideos.filter(t => t.panelId === "linkvidsource")}
                                    peritem={this.state.peritem}
                                />
                            </div>
                        </div>
                        <ConfirmDialog open={this.state.modal} onClose={() => { this.setState({ modal: false }) }} onConfirm={this.saveDraft} />
                    </Wrapper>
                </LoadingOverlay>
            </LoadingOverlay>
        )
    }

}

export default EditLesson;
