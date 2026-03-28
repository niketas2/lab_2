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
        <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-slate-800">
            <h2 className="mb-4 border-b border-blue-200 pb-2 text-2xl font-bold text-blue-900 dark:border-slate-600 dark:text-blue-300">
                Контакти
            </h2>

            <div className="mb-6 rounded-xl border-l-4 border-blue-500 bg-slate-50 p-4 dark:bg-slate-700/40">
                <p className="text-gray-700 dark:text-slate-200">
                    <span className="font-semibold text-slate-900 dark:text-white">Email:</span><br />
                    mykyta.novykov.kb.2023@lpnu.ua
                </p>

                <p className="mt-3 text-gray-700 dark:text-slate-200">
                    <span className="font-semibold text-slate-900 dark:text-white">Місто:</span><br />
                    Україна
                </p>
            </div>

            <h3 className="mb-3 text-lg font-semibold text-slate-800 dark:text-white">
                Системна інформація
            </h3>

            {systemInfo ? (
                <div className="space-y-2 rounded-xl border-l-4 border-blue-500 bg-slate-50 p-4 dark:bg-slate-700/40">
                    {Object.entries(systemInfo).map(([key, value]) => (
                        <p key={key} className="break-words text-sm text-gray-700 dark:text-slate-200">
                            <span className="font-semibold text-slate-900 dark:text-white">{key}:</span>{' '}
                            {String(value)}
                        </p>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 dark:text-slate-300">Завантаження...</p>
            )}
        </section>
    );
}