import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiGetLessonTemplates, staticLessonTemplates } from "../../services/commonService"


const LessonTemplates = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        getLessonTemplates();
    }, []);

    const getLessonTemplates = () => {
        // apiGetLessonTemplates()
        // .then(res => {
        //     if(res) {
        //         console.log(res)
        //     }
        // })
        // .catch(function(error){
        //     console.log(error);
        // })

        setData(staticLessonTemplates());
    }

    return (
        <div className="w-full rounded-lg shadow-lg mb-8">
            <p className="pl-10 py-4 bg-customPrimary text-white flex items-center rounded-t-lg text-2xl font-custom-bold">Explorar plantillas para lecciones </p>
            <div className="w-full px-10 py-8">
                <div className="w-full flex-none sm:flex items-center">
                    <div className="flex w-full sm:w-160 relative">
                        <div className="w-10 h-10 absolute left-0 bg-customPurple flex items-center rounded-lg">
                            <img src="/images/search-icon.png" alt="search-icon" className="mx-auto" />
                        </div>
                        <input type="text" className="w-full h-10 bg-customBlue rounded-lg pl-16 pr-8 text-lg font-custom-light border border-gray-300 focus:shadow-outline" placeholder="Buscar..." />
                    </div>
                    <button className="bg-customYellow w-full sm:w-auto px-4 h-10 text-lg font-custom-bold text-black flex items-center rounded-lg mt-3 sm:mt-0 ml-0 sm:ml-4 font-custom-bold">
                        <span className="mx-auto">Avanzado</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 col-gap-3 row-gap-3 lg:row-gap-0 w-full lg:w-160 mt-4">
                    <button className="bg-customYellow py-2 h-auto sm:h-10 text-lg font-custom-bold text-black flex items-center rounded-lg">
                        <span className="mx-auto font-custom-bold">Lecciones populares</span>
                    </button>
                    <button className="bg-customYellow w-full h-10 text-lg font-custom-bold text-black flex items-center rounded-lg">
                        <span className="mx-auto font-custom-bold">Novedades</span>
                    </button>
                    <button className="bg-customYellow w-full h-10 text-lg font-custom-bold text-black flex items-center rounded-lg">
                        <span className="mx-auto font-custom-bold">Tendencias</span>
                    </button>
                </div>
                {data !== {} &&
                    Object.keys(data).map(function (key) {
                        return (
                            <div key={key}>
                                <p className="pt-6 pb-4 text-xl font-custom-medium">{key}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 col-gap-4 row-gap-4">
                                    {data[key] !== [] && data[key].map((item) => (
                                        <Link to="/" key={item.id} className="mx-auto">
                                            <img src={item.src} alt="lesson-templates" className="object-none object-center rounded-lg hover:opacity-50" style={{ width: "170px", height: "170px" }} />
                                        </Link>
                                    ))
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <div className="flex pt-6">
                    <button className="bg-customYellow px-6 w-full md:w-auto h-10 text-lg font-custom-bold text-black flex items-center rounded-lg mx-auto">
                        <span className="mx-auto">Ver más</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LessonTemplates;