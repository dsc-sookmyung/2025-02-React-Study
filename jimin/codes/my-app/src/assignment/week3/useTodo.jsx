import React, {useState} from "react";

export default function useTodo(td) {
    const [todo, setTodo] = useState(td);
    const addTodo = (title, text) => {
        setTodo([...todo, {title, text}]);
    }
    const deleteTodo = (title) => {
        setTodo(todo.filter((t) => t.title !== title));
    };

    return [todo, addTodo, deleteTodo];
}
