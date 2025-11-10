import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import ProfileCard from "./ProfileCard";
import PostCard from "./PostCard";
import user2 from "../img/user2.PNG";

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div    
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white",
            }}
        >   
            <button onClick={toggleTheme}>테마 변경</button>
            <ProfileCard
                title={"YOOGAYOUNG"}
                image ={user2}
                text={"안녕하세요, 유가영입니다. 리액트로 프로젝트 중입니다."}
            />
            <PostCard
                title={"추운 겨울"}
                text={"날이 추워지고 있네요 요즘 독감유행이라는데 다들 독감 예방주사 맞으셨나요?" }
            />
        </div>
    );
}

export default MainContent;