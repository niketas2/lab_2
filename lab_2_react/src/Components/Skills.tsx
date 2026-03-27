
export const Skills = () => {
    return (
        <section className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md mb-6 transition:-trnasform duration-300 hover:translate-y-2">

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Технічні навички
            </h2>

            <div className="space-y-4">

                <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                        Мови програмування
                    </h3>

                    <ul className="list-disc list-inside text-gray-600">
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                        Фреймворки та бібліотеки
                    </h3>

                    <ul className="list-disc list-inside text-gray-600">
                        <li>React</li>
                        <li>Vue.js</li>
                        <li>Redux Toolkit</li>
                        <li>Zustand</li>
                        <li>Fuse.js</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                        Інструменти та технології
                    </h3>

                    <ul className="list-disc list-inside text-gray-600">
                        <li>Axios</li>
                        <li>JWT Authentication</li>
                        <li>Context API</li>
                        <li>React Router</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                        Стилізація
                    </h3>

                    <ul className="list-disc list-inside text-gray-600">
                        <li>SCSS</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>

            </div>

        </section>
    )
}