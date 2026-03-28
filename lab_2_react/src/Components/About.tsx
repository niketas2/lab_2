import React from 'react';

export const About = () => {
    return (
        <section className="mb-8 rounded-2xl bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 dark:bg-slate-800">
            <h2 className="mb-4 border-b border-blue-200 pb-2 text-2xl font-bold text-blue-900 dark:border-slate-600 dark:text-blue-300">
                Про мене
            </h2>
            <p className="text-base leading-7 text-gray-700 dark:text-slate-200">
                Я Frontend розробник з досвідом створення веб-додатків на React та Vue.
                Працював над кількома фриланс проєктами, де розробляв інтерфейси,
                реалізовував взаємодію з API та керування станом додатків.
            </p>
        </section>
    )
}