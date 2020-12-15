import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiGetLessonHistory } from '../../services/news';
import Moment from 'moment';
import TotalPreviewModal from '../TotalPreviewModal';


const TestComponent1 = (props) => {

    const [data, setData] = useState([]);
    const [id, setId] = useState(null);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        getLessonHistory();
    }, []);

    const getLessonHistory = () => {

        apiGetLessonHistory()
            .then(res => {
                if (res) {
                    console.log("=====res", res);
                    setData(res);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const viewModal = (id) => {
        setId(id);
        setModal(true);
    }

    const handlePreviewClose = () => {
        setId(null);
        setModal(false);
    }

    return (
        <div className="w-full rounded-lg shadow-lg pt-3 mb-8">
            <p className="pl-10 py-4 bg-customPrimary text-white flex items-center rounded-t-lg text-2xl font-custom-bold">History Test</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-4 row-gap-4 p-4">
                {data !== [] && data.map((lesson) => (
                    <div key={lesson.id} className="rounded-lg shadow-lg mx-auto hover:opacity-50 cursor-pointer" onClick={() => viewModal(lesson.id)}>
                        <img src="/images/pyramid.png" className="object-none object-center rounded-lg w-full" style={{ maxwidth: "230px", height: "170px" }} />
                        <div className="p-3">
                            <div className="flex items-start">
                                <img src="images/account-gray.png" className="object-none w-4 h-8" />
                                <div className="">
                                    <p className="font-semibold pl-2 h-6">{lesson.lesson_id !== null ? lesson.lesson_id : ""}</p>
                                    <p className="pl-2">{Moment(lesson.updated_at).format('YYYY-MM-DD')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {
                id !== null &&
                <TotalPreviewModal
                    open={modal}
                    id={id}
                    readonly={true}
                    handlePreviewClose={handlePreviewClose}
                />
            }
        </div>
    )
}

export default TestComponent1;
