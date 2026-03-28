
export const Skills = () => {
    return (
        <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-slate-800">
            <h2 className="mb-4 border-b border-blue-200 pb-2 text-2xl font-bold text-blue-900 dark:border-slate-600 dark:text-blue-300">
                Навички
            </h2>

            <div className="space-y-5">
                <div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-800 dark:text-white">
                        Мови програмування
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-slate-200">
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-800 dark:text-white">
                        Фреймворки та бібліотеки
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-slate-200">
                        <li>React</li>
                        <li>Vue.js</li>
                        <li>Redux Toolkit</li>
                        <li>Zustand</li>
                        <li>Fuse.js</li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-800 dark:text-white">
                        Інструменти та технології
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-slate-200">
                        <li>Axios</li>
                        <li>JWT Authentication</li>
                        <li>Context API</li>
                        <li>React Router</li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-800 dark:text-white">
                        Стилізація
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-slate-200">
                        <li>SCSS</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}