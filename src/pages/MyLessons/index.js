import React from 'react';
import MyLessonComponent from '../../components/MyLessonComponent';
import WithHeaderLayout from '../../layouts/WithHeaderLayout';

const MyLessons = (props) => {

    return (
        <WithHeaderLayout>
            <MyLessonComponent />
        </WithHeaderLayout>
    )
}

export default MyLessons;
