import React, { useState, useEffect } from 'react';
import { apiGetRecentLessons } from "../../services/news.js"
import { Link } from 'react-router-dom';
import Moment from 'moment';


const MyLessonComponent = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getRecentLessons();
    }, []);

    const getRecentLessons = () => {

        apiGetRecentLessons()
            .then(res => {
                if (res) {
                    setData(res);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="w-full rounded-lg shadow-lg mb-8">
            <p className="pl-10 py-4 bg-customPrimary text-white flex items-center rounded-t-lg text-2xl font-custom-bold">Mis lecciones</p>
            <div className="w-full p-10">
                <div className="flex-none xl:flex">
                    <div className="flex-none lg:flex lg:flex-auto mb-4 xl:mb-0">
                        <button className="flex-1 xl:flex-auto bg-customYellow w-full lg:w-auto py-2 h-auto sm:h-10 text-lg font-custom-bold text-black flex items-center rounded-lg mr-3 mb-4 lg:mb-0">
                            <span className="mx-auto font-custom-bold">Lenguaje y Comunicación</span>
                        </button>
                        <button className="flex-1 xl:flex-auto bg-customYellow w-full lg:w-auto h-10 text-lg font-custom-bold text-black flex items-center rounded-lg mr-0 xl:mr-3">
                            <span className="mx-auto font-custom-bold">Matemática</span>
                        </button>
                    </div>
                    <div className="flex-none lg:flex lg:flex-auto">
                        <button className="flex-1 xl:flex-auto bg-customYellow w-full lg:w-auto h-10 text-lg font-custom-bold text-black flex items-center rounded-lg mr-3 mb-4 lg:mb-0">
                            <span className="mx-auto font-custom-bold">Ciencias Naturales</span>
                        </button>
                        <button className="flex-1 xl:flex-auto bg-customYellow w-full lg:w-auto h-10 text-lg font-custom-bold text-black flex items-center rounded-lg">
                            <span className="mx-auto font-custom-bold">+ Asignaturas</span>
                        </button>
                    </div>
                </div>
                <p className="pt-6 pb-4 font-custom-medium">Lecciones recientemente creadas</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-4 row-gap-4">
                    {data !== [] && data.map((lesson) => (
                        <Link to={"/lesson/edit/" + lesson.id} key={lesson.id} className="rounded-lg shadow-lg mx-auto hover:opacity-50">
                            <img src="/images/pyramid.png" className="object-none object-center rounded-lg w-full" style={{ maxwidth: "230px", height: "170px" }} />
                            <div className="p-3">
                                <div className="flex items-start">
                                    <img src="images/account-gray.png" className="object-none w-4 h-8" />
                                    <div className="">
                                        <p className="font-semibold pl-2 h-6">{JSON.parse(lesson.content).title !== null ? JSON.parse(lesson.content).title : ""}</p>
                                        <p className="pl-2">{Moment(lesson.updated_at).format('YYYY-MM-DD')}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MyLessonComponent;