import './App.css'
import { About } from './Components/About'
import { Education } from './Components/Education'
import { Expirience } from './Components/Expirience'
import { Header } from './Components/Header'
import { Skills } from './Components/Skills'
import { Footer } from './Components/Footer'
import { Review } from './Components/Review'
import { ContactForm } from "./Components/ContactForm.tsx"
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

        if (hour >= 7 && hour < 21) {
            setTheme("light")
        } else {
            setTheme("dark")
        }
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
        <div className="min-h-screen bg-orange-300 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
            <div className="mx-auto max-w-5xl px-4 py-6">
                <button
                    onClick={toggleTheme}
                    className="mb-6 inline-flex items-center justify-center rounded-lg bg-blue-500 px-4 py-2 text-white font-medium shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 active:translate-y-0 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300"
                >
                    {theme === "dark" ? "Світла тема" : "Темна тема"}
                </button>

                <ContactForm />
                <Header />
                <About />
                <Skills />
                <Expirience />
                <Education />
                <Review />
                <Footer />
            </div>
        </div>
    )
}

export default App