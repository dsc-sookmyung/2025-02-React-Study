import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import Card from "./Card";

function PostCard({ title, text }) {
    const { theme } = useContext(ThemeContext);

    return (
        <Card text={text}>
            <h2
                style={{
                    color: `${theme === "light" ? "black" : "white"}`,
                }}
            >
                {title}
            </h2>
        </Card>
    )

}

export default PostCard;