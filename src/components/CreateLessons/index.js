import React from 'react';
import { Link } from 'react-router-dom';

const CreateLessons = (props) => {

    return (
        <div className="w-full rounded-lg shadow-lg pt-3 mb-8">
            <p className="pl-10 py-4 bg-customPrimary text-white flex items-center rounded-t-lg text-2xl font-custom-bold">¿Profesor listo para crear la siguiente lección?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-2 py-8">
                <Link to="/" className="w-full py-8 text-center hover:opacity-50">
                    <img src="/images/image-1.png" alt="img-1" className="mx-auto" />
                    <p className="pt-8 font-semibold text-lg font-custom-medium">Comenzar una lección desde cero</p>
                </Link>
                <Link to="/" className="w-full py-8 text-center hover:opacity-50">
                    <img src="/images/image-1.png" alt="img-2" className="mx-auto" />
                    <p className="pt-8 font-semibold text-lg font-custom-medium">Utiliza lecciones preconficuradas </p>
                </Link>
                <Link to="/" className="w-full py-8 text-center hover:opacity-50">
                    <img src="/images/image-1.png" alt="img-3" className="mx-auto" />
                    <p className="pt-8 font-semibold text-lg font-custom-medium">Recomendaciones para crear Tablero extraordinarias lecciones</p>
                </Link>
                <Link to="/" className="w-full hover:opacity-50">
                    <img src="/images/image-2.png" alt="img-4" className="mx-auto" />
                </Link>
            </div>
        </div>
    )
}

export default CreateLessons;
