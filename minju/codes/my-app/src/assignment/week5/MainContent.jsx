import React, { useContext } from "react";

import ThemeContext from "./ThemeContext";
import ProfileCard from "./ProfileCard";
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
        title={"DDUGGUNG"}
        img={require("./뚜껑.jpg")}
        text={"안녕하세요, 정민주입니다. 리액트로 프로젝트 중입니다."}
      />
      <PostCard
        title={"추운 겨울"}
        img={require("./뚜껑.jpg")}
        text={
          "겨울 날 준비를 잘 하고 계시는지요. 저는 본가에서 롱패딩 가져오는 것을 깜빡해 부모님께 부쳐달라고 했네요. 다들 그런 바보 같은 실수 안하도록 조심하세요!"
        }
      />
    </div>
  );
}
