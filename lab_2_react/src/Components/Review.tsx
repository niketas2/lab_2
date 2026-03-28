import { useEffect, useState } from "react";

type Comment = {
    id: number;
    name: string;
    email: string;
    body: string;
};

export const Review = () => {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/11/comments")
            .then((res) => res.json())
            .then((data) => setComments(data))
            .catch((err) => console.error(err));
    }, [])

    return (
        // @ts-ignore
        <section className="mb-8 rounded-2xl bg-white p-6 shadow-md dark:bg-slate-800">
            <h2 className="mb-4 border-b border-blue-200 pb-2 text-2xl font-bold text-blue-900 dark:border-slate-600 dark:text-blue-300">
                Коментарі
            </h2>

            <div className="flex flex-col gap-4">
                {comments.map((comment) => (
                    <div
                        key={comment.id}
                        className="rounded-xl border-l-4 border-blue-500 bg-slate-50 p-4 dark:bg-slate-700/40"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                            {comment.name}
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-slate-300">
                            {comment.email}
                        </p>

                        <p className="mt-2 text-gray-700 dark:text-slate-200">
                            {comment.body}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};