
export const Expirience = () => {
    return (
        <section className="mb-8 rounded-2xl bg-white p-6 shadow-md dark:bg-slate-800">
            <h2 className="mb-4 border-b border-blue-200 pb-2 text-2xl font-bold text-blue-900 dark:border-slate-600 dark:text-blue-300">
                Досвід роботи
            </h2>

            <p className="mb-4 leading-7 text-gray-700 dark:text-slate-200">
                Досвід створення веб-додатків на React та Vue.
                Працював над фриланс проєктами, де розробляв інтерфейси,
                працював з API та керував станом додатків.
            </p>

            <article className="rounded-xl border-l-4 border-blue-500 bg-slate-50 p-5 dark:bg-slate-700/40">
                <h3 className="text-lg font-semibold">
                    Frontend Developer (Freelance)
                </h3>

                <p className="mb-3 text-sm text-gray-500 dark:text-slate-300">
                    Розробка веб-додатків на замовлення
                </p>

                <ul className="list-disc space-y-1 pl-5 text-gray-700 dark:text-slate-200">
                    <li>Створення UI на React та Vue</li>
                    <li>Інтеграція REST API через Axios</li>
                    <li>Керування станом (Redux Toolkit, Zustand)</li>
                    <li>JWT авторизація</li>
                    <li>Пошук через Fuse.js</li>
                    <li>SCSS та Tailwind стилізація</li>
                </ul>
            </article>
        </section>
    )
}