import React from 'react';
import "./index.css";
import MyLessonComponent from '../../components/MyLessonComponent';
import LessonTemplates from '../../components/LessonTemplates';
import WithHeaderLayout from '../../layouts/WithHeaderLayout';
import CreateLessons from '../../components/CreateLessons';
import TestComponent from '../../components/TestComponent';
import TestComponent1 from '../../components/TestComponent1';

const Home = (props) => {

    return (
        <WithHeaderLayout>
            <CreateLessons />
            <LessonTemplates />
            <MyLessonComponent />
            <TestComponent />
            <TestComponent1 />
        </WithHeaderLayout>
    )
}

export default Home;
