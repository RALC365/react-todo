import IconCross from "./icons/IconCross";
import IconCheck from "./icons/CheckIcon";

const TodoItem = ({ todo, updateTodo, removeTodo }) => {
    const { id, title, completed } = todo;

    const classComplete =
        "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500";
    const classIncomplete = "inline-block";

    return (
        <article className="flex gap-4 border-b border-b-gray-400 dark:bg-gray-800">
            <button
                className={`h-5 w-5 flex-none rounded-full border-2 ${completed ? classComplete : classIncomplete}`}
                onClick={() => {
                    updateTodo(id);
                }}
            >
                <IconCheck />
            </button>
            <p
                className={`grow text-gray-600 dark:text-gray-300 ${completed && "line-through"}`}
            >
                {title}
            </p>
            <button
                className="flex-none"
                onClick={() => {
                    removeTodo(id);
                }}
            >
                <IconCross />
            </button>
        </article>
    );
};

export default TodoItem;
