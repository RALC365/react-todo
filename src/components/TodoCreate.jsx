import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    //anfn
    const habdleSubmitAddTodo = (e) => {
        e.preventDefault();

        if (title.trim()) {
            createTodo(title);
        }
        setTitle("");
    };

    return (
        <form
            onSubmit={habdleSubmitAddTodo}
            className="mt-8 flex items-center gap-4 overflow-hidden rounded bg-white px-4 py-4 dark:bg-gray-800"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full text-gray-400 outline-none dark:bg-gray-800 dark:text-gray-200"
                type="text"
                placeholder="Create a new todo..."
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
