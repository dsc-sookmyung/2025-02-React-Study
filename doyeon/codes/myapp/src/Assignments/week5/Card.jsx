import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function Card({ text, children }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div
        style={{
            margin: 8,
            padding: 8,
            borderRadius: 8,
            boxShadow: "0px 0px 4px grey",
            backgroundColor: theme === "light" ? "white" : "black",
            color: theme === "light" ? "black" : "white",
        }}
        >
        {children}
        <p>{text}</p>
        </div>
    );
}