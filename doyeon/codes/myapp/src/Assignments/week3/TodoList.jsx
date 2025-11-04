import React, { useState } from "react";
import useTodo from "./useTodo";
import Todo from "./Todo";

export default function TodoList() {
    const [titleInput, setTitleInput] = useState("");
    const [textInput, setTextInput] = useState("");
    const [todo, addTodo, deleteTodo] = useTodo([]);
    return (
        <div
        style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "5px 10px",
            boxSizing: "border-box",
        }}
        >
        <div>
            {todo.map((td, i) => (
            <Todo
                key={i}
                title={td.title}
                text={td.text}
                deleteTodo={deleteTodo}
            />
            ))}
        </div>

        <div
            style={{
            display: "flex",
            flexDirection: "column",
            }}
        >
            <input
            placeholder="투두 타이틀 입력"
            value={titleInput}
            onChange={(e) => {
                setTitleInput(e.target.value);
            }}
            style={{ width: "50%" }}
            />
            <textarea
            placeholder="투두 내용 입력"
            value={textInput}
            onChange={(e) => {
                setTextInput(e.target.value);
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                e.preventDefault();
                addTodo(titleInput, textInput);
                setTitleInput("");
                setTextInput("");
                }
            }}
            style={{ height: "5rem" }}
            />
        </div>
        </div>
    );
}