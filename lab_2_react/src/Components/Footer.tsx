import {useEffect, useState} from 'react';

export const Footer = () => {
    const [systemInfo, setSystemInfo] = useState(null);

    useEffect(() => {
        const info = {
            appName: navigator.appName,
            appVersion: navigator.appVersion,
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language,
            online: navigator.onLine,
            cookieEnabled: navigator.cookieEnabled,
        }

        localStorage.setItem('systemInfo', JSON.stringify(info))
        // @ts-ignore
        const savedInfo = JSON.parse(localStorage.getItem('systemInfo'))
        setSystemInfo(savedInfo)
    }, [])

    return (
        <footer
            className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md mb-6 transition:-trnasform duration-300 hover:translate-y-2">
            <h2 className="text-2xl font-semibold mb-2 text-black">
                Контакти
            </h2>

            <p className="text-black">
                Email: mykyta.novykov.kb.2023@lpnu.ua
            </p>

            <h1 className="text-xl font-semibold mt-4 text-black">Дані</h1>
            {systemInfo ? (
                <div className="text-black">
                    {Object.entries(systemInfo).map(([key, value]) => (
                        <p key={key}>
                            <strong>{key}:</strong> {String(value)}
                        </p>
                    ))}
                </div>
            ) : (
                <p>Завантаження...</p>
            )}
        </footer>
    )
}