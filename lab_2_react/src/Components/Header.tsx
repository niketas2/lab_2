import React from 'react';

export const Header = () => {
    return (
        <header className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md mb-6 transition:-trnasform duration-300 hover:translate-y-2">
            <h1 className="text-3xl font-bold text-gray-800">
                Frontend Developer CV
            </h1>

            <p className="mt-2 text-lg text-gray-700">
                Ім'я: Новиков Микита
            </p>

            <p className="text-gray-600">
                Місто: Україна
            </p>
        </header>
    )
}