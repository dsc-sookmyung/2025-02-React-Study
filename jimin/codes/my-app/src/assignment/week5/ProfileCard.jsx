import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import Card from "./Card";

function ProfileCard({title, image, text}) {
    const { theme } = useContext(ThemeContext);

    return (
        <Card text={text}>
            <div style={{display:"flex"}}>
                <img 
                    src={image}
                    style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        marginRight: "20px"
                    }}
                >
                </img>
                <h1
                    style={{
                        color: `${theme === "light" ? "black" : "white"}`,
                    }}
                >
                    {title}
                </h1>
            </div>         
        </Card>
    );
}

export default ProfileCard;