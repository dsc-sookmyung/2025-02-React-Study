import React, { useRef } from "react";

export default function Todo({ title, text, deleteTodo }) {
  const toEraseTitle = useRef(null);

  return (
    <div
      style={{
        width: "100%",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "5px 10px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div style={{ color: "skyblue" }} ref={toEraseTitle}>
          {title}
        </div>
        <div>{text}</div>
      </div>
      <button
        onClick={(e) => {
          deleteTodo(toEraseTitle.current.textContent);
        }}
      >
        완료
      </button>
    </div>
  );
}
