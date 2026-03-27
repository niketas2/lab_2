import React, { useEffect, useState } from "react";

export const Review = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/11/comments")
            .then((res) => res.json())
            .then((data) => setComments(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="mx-auto mb-6 max-w-3xl rounded-xl bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 dark:bg-gray-800">
            <h1 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
                Коментарі
            </h1>

            <div className="flex flex-col gap-4">
                {comments.map((comment) => (
                    <div
                        key={comment.id}
                        className="rounded-lg border border-gray-200 p-4 dark:border-gray-600"
                    >
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                            {comment.name}
                        </h2>

                        <p className="text-sm text-gray-500 dark:text-gray-300">
                            {comment.email}
                        </p>

                        <p className="mt-2 text-gray-700 dark:text-gray-200">
                            {comment.body}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};