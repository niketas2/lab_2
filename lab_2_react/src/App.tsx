import './App.css'
import { About } from './Components/About'
import { Education } from './Components/Education'
import { Expirience } from './Components/Expirience'
import { Header } from './Components/Header'
import { Skills } from './Components/Skills'
import { Footer } from './Components/Footer'
import { Review } from './Components/Review'
import { ContactForm } from "./Components/ContactForm"
import { useState, useEffect } from "react"

function App() {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")

        if (savedTheme) {
            setTheme(savedTheme)
            return
        }

        const hour = new Date().getHours()
        setTheme(hour >= 7 && hour < 21 ? "light" : "dark")
    }, [])

    useEffect(() => {
        const root = document.documentElement

        if (theme === "dark") {
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }

        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"))
    }

    return (
        <div className="min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white">
            <div className="mx-auto max-w-6xl px-4 py-8">
                <button
                    onClick={toggleTheme}
                    className="mb-6 rounded-xl bg-blue-600 px-4 py-2 font-medium text-white shadow-md transition hover:bg-blue-700 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300"
                >
                    {theme === "dark" ? "Світла тема" : "Темна тема"}
                </button>

                <ContactForm />

                <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
                    <aside className="space-y-6">
                        <Header />
                        <Skills />
                        <Footer />
                    </aside>

                    <main className="space-y-6">
                        <About />
                        <Expirience />
                        <Education />
                        <Review />

                    </main>
                </div>
            </div>
        </div>
    )
}

export default App