import {useState, useEffect} from 'react';

export const ContactForm = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const isClosed = sessionStorage.getItem("modalClosed");

        // @ts-ignore
        if (isClosed === true) return

        const timer = setTimeout(() => {
            setIsOpen(true)
        }, 6000)
        return () => clearTimeout(timer)
    }, [])
    const closeModal = () => {
        setIsOpen(false)
        sessionStorage.setItem("modalClosed", "true")
    }


    return (
        isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-800 dark:text-white">
                    <button
                        onClick={closeModal}
                        className="absolute right-4 top-3 text-2xl text-gray-500 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
                    >
                        ×
                    </button>

                    <h2 className="mb-4 border-b pb-2 text-2xl font-bold text-blue-900 dark:text-blue-300">
                        Форма зворотного зв’язку
                    </h2>

                    <form
                        action="https://formspree.io/f/mdawraoo"
                        method="POST"
                        className="flex flex-col gap-3"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Ім’я"
                            required
                            className="rounded-xl border border-gray-300 bg-white p-3 text-black outline-none transition focus:border-blue-500 dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:placeholder:text-gray-300"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="rounded-xl border border-gray-300 bg-white p-3 text-black outline-none transition focus:border-blue-500 dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:placeholder:text-gray-300"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Телефон"
                            required
                            className="rounded-xl border border-gray-300 bg-white p-3 text-black outline-none transition focus:border-blue-500 dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:placeholder:text-gray-300"
                        />

                        <textarea
                            name="message"
                            placeholder="Повідомлення"
                            rows="4"
                            required
                            className="rounded-xl border border-gray-300 bg-white p-3 text-black outline-none transition focus:border-blue-500 dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:placeholder:text-gray-300"
                        />

                        <button
                            type="submit"
                            className="rounded-xl bg-green-500 p-3 text-white transition hover:bg-green-600"
                        >
                            Відправити
                        </button>
                    </form>
                </div>
            </div>
        )
    )
}