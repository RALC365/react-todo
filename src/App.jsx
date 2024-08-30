import Header from "./components/icons/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";
/* import Counter from "./components/Count"; */

const initialStateTodos = [
    {
        id: 1,
        title: "Go to to the gym",
        completed: true,
    },
    {
        id: 2,
        title: "Complete online Javascript Bluuweb Course",
        completed: false,
    },
    {
        id: 3,
        title: "Go to the disco",
        completed: false,
    },
    {
        id: 4,
        title: "10 min medition",
        completed: true,
    },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("ALL");

    const filteredTodos = () => {
        if (filter == "ALL") return todos;

        return todos.filter((todo) =>
            filter === "COMPLETE" ? todo.completed : !todo.completed
        );
    };

    const changeFilter = (filter) => setFilter(filter);

    return (
        <>
            <div className="bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
                {/*  <Counter /> */}
                <Header />
                <main className="container mx-auto mt-8 px-4">
                    <TodoCreate createTodo={createTodo} />
                    <TodoList
                        todos={filteredTodos()}
                        updateTodo={updateTodo}
                        removeTodo={removeTodo}
                    />
                    <TodoComputed
                        itemsLeft={computedItemsLeft}
                        clearCompleted={clearCompleted}
                    />
                </main>

                <TodoFilter changeFilter={changeFilter} filter={filter} />

                <footer className="mt-8 text-center dark:bg-gray-900 dark:text-gray-300">
                    Drag and drop
                </footer>
            </div>
        </>
    );
};

export default App;
