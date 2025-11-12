import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function Card({ title, text, children }) {
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";

  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px grey",
        backgroundColor: isLight ? "white" : "black",
        color: isLight ? "black" : "white",
      }}
    >
      {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
      {children}
      {text && <p>{text}</p>}
    </div>
  );
}
