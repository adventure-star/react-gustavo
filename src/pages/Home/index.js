import React, { useState } from 'react';
import "./index.css";
import MyLessonComponent from '../../components/MyLessonComponent';
import LessonTemplates from '../../components/LessonTemplates';
import WithHeaderLayout from '../../components/WithHeaderLayout';
import CreateLessons from '../../components/CreateLessons';

const Home = (props) => {

    return (
        <WithHeaderLayout>
            <CreateLessons />
            <LessonTemplates />
            <MyLessonComponent />
        </WithHeaderLayout>
    )
}

export default Home;
