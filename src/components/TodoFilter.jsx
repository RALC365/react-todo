const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4 dark:bg-gray-800 [&>button:hover]:text-blue-600
                dark:[&>button]:text-gray-300">
                <button
                    className={`${filter === "ALL" && "text-blue-600"}`}
                    onClick={() => changeFilter("ALL")}
                >
                    All
                </button>
                <button
                    className={`${filter === "ACTIVE" && "text-blue-600"}`}
                    onClick={() => changeFilter("ACTIVE")}
                >
                    Active
                </button>
                <button
                    className={`${filter === "COMPLETE" && "text-blue-600"}`}
                    onClick={() => changeFilter("COMPLETE")}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};
export default TodoFilter;
