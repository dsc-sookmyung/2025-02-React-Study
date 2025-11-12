import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import ProfileCard from "./ProfileCard";
import PostCard from "./PostCard";
import user2 from "../../img/user2.PNG";

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
                boxSizing: "border-box",
            }}
        >   
            <button onClick={toggleTheme}>테마 변경</button>
            <ProfileCard
                title={"한지민"}
                image ={user2}
                text={"안녕하세요, 한지민입니다. 리액트로 프로젝트 중입니다."}
            />
            <PostCard
                title={"추운 겨울"}
                text={"날이 추워지고 있는데 다들 감기 조심하세요!" }
            />
        </div>
    );
}

export default MainContent;