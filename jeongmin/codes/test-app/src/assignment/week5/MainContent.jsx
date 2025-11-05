import React, { useContext } from "react";

import ThemeContext from "./ThemeContext";
import ProfileCard from "./Profilecard";
import PostCard from "./PostCard";

export default function MainContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "1.5rem",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        boxSizing: "border-box",
      }}
    >
      <button onClick={toggleTheme}>테마 변경</button>
      <ProfileCard
        title={"JEONGMIN"}
        text={"안녕하세요 오정민입니다."}
      />
      <PostCard
        title={"두번째 카드"}
        text={
          "안녕하세요!"
        }
      />
    </div>
  );
}