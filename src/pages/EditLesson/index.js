import React, { PureComponent } from 'react';
import YellowPreviewButton from '../../components/YellowPreviewButton';
import { MainBoard } from '../../components';
import ImageSource from '../../components/ImageSource';
import SubBoard from '../../components/SubBoard';
import VideoSource from '../../components/VideoSource';
import TextSource from '../../components/TextSource';
import ConfirmDialog from '../../components/ConfirmDialog';
import { apiGetAllImages, apiGetAllVideos, apiGetAllTexts, apiGetAllAnimations, apiGetAllPresentations, apiGetAllLinkVideos, apiGetLessonById, apiUpdateLesson } from '../../services/news';
import LoadingOverlay from 'react-loading-overlay';
import { DotLoader } from 'react-spinners';
import AnimationSource from '../../components/AnimationSource';
import PresentationSource from '../../components/PresentationSource';
import LinkVideoSource from '../../components/LinkVideoSource';
import LessonWrapper from '../../layouts/LessonWrapper';
import PreviewModal from '../../components/PreviewModal';


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
            peritem: 3,
            isPreview: false
        };

        this.onDrop = this.onDrop.bind(this);

        this.handleScreenChange = this.handleScreenChange.bind(this);

        window.addEventListener('resize', this.handleScreenChange);

    }

    handleScreenChange() {

        var width = window.innerWidth;
        var peritem = 3;

        if (width >= 1280) { peritem = 3; }
        if (width >= 1000 && width < 1280) { peritem = 2; }
        if (width >= 640 && width < 1000) { peritem = 1; }
        if (width < 640) { peritem = 3; }

        this.setState({ peritem: peritem });
    }

    componentDidMount() {

        this.handleScreenChange();

        apiGetAllImages()
            .then(res => {
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
        apiGetLessonById(this.props.match.params.id)
            .then(res => {
                if (res) {
                    let data = JSON.parse(res.content);
                    this.setState({
                        title: data.title,
                        data: data.data
                    })
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

        let page = this.state.page;

        var allstates = this.state.data;
        var currentstates = allstates[page];

        if (!(currentstates[targetId].type === item.type && currentstates[targetId].id === item.id)) {

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

            let newstate = { ...allstates };

            newstate[page] = currentstates;

            this.setState({ data: newstate });

        }

    }

    onPageChange = (newpage) => {
        if (this.state.page !== newpage) {
            this.setState({ page: newpage });
        }
    }

    dataModify = (data) => {

        var newdata = {};

        newdata.title = this.state.title;
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

    onSaveButtonClick = () => {

        this.setState({ modal: true });

    }

    saveDraft = () => {

        this.setState({ modal: false });
        this.setState({ isSaving: true });

        apiUpdateLesson(this.props.match.params.id, this.dataModify(this.state.data))
            .then(res => {
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
    onPreviewOpen = () => {
        this.setState({ isPreview: true });
    }
    onPreviewClose = () => {
        this.setState({ isPreview: false });
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
                    text='Updating...'
                >
                    <LessonWrapper
                        page={this.state.page}
                        title={this.state.title}
                        onTitleChange={this.onTitleChange}
                        onChange={this.onPageChange}
                        onClick={this.onSaveButtonClick}
                        editable={this.state.editable}
                        onEditableChange={this.onEditableChange}
                        onPreviewClick={this.onPreviewOpen}
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
                        <PreviewModal
                            open={this.state.isPreview}
                            handlePreviewClose={this.onPreviewClose}
                            data={this.state.data[this.state.page]}
                        >
                        </PreviewModal>
                    </LessonWrapper>
                </LoadingOverlay>
            </LoadingOverlay>
        )
    }

}

export default EditLesson;
