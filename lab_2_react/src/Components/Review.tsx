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
        <div className="mx-auto mb-6 max-w-3xl rounded-xl bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 ">
            <h1 className="mb-4 text-2xl font-semibold text-black ">
                Коментарі
            </h1>
            <div className="flex flex-col gap-4 text-black">
                {comments.map((comment) => (
                    <div
                        // @ts-ignore
                        key={comment.id}
                        className="rounded-lg border border-gray-200 p-4 text-black"
                    >
                        <h2 className="text-lg font-semibold text-black">
                            {comment.name}
                        </h2>

                        <p className="text-sm text-black">
                            {comment.email}
                        </p>

                        <p className="mt-2 text-black">
                            {comment.body}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};