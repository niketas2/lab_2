
export const Expirience = () => {
    return (
        <section className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md mb-6 transition:-trnasform duration-300 hover:translate-y-2">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Досвід роботи
            </h2>

            <article>
                <h3 className="text-xl font-semibold text-gray-700">
                    Frontend Developer (Freelance)
                </h3>

                <p className="text-gray-600 mt-2 mb-4">
                    Розробка веб-додатків на замовлення.
                </p>

                <h4 className="font-medium text-gray-700 mb-2">
                    Основні задачі:
                </h4>

                <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Створення користувацьких інтерфейсів на React та Vue</li>
                    <li>Інтеграція REST API через Axios</li>
                    <li>Керування станом додатку через Redux Toolkit та Zustand</li>
                    <li>Реалізація авторизації з використанням JWT</li>
                    <li>Реалізація пошуку через Fuse.js</li>
                    <li>Стилізація інтерфейсів за допомогою SCSS та Tailwind CSS</li>
                </ul>
            </article>
        </section>
    )
}