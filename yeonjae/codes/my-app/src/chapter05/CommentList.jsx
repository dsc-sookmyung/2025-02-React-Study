import React from "react";
import Comment from "./Comment";
import gdg from "../img/gdg.png";
import dumpling from "../img/dumpling.jpg";
import dumpling2 from "../img/dumpling2.jpg";

function CommentList(props) {
    return (
        <div>
            <Comment 
                profile={gdg}
                name={"GDGoC Sookmyung"} 
                comment={"리액트 스터디 2주차!"} 
            />
            <Comment 
                profile={dumpling}
                name={"안경만두"} 
                comment={"안녕하세요 ~"} 
            />
            <Comment
                profile={dumpling2}
                name={"이연재"} 
                comment={"반가워요 ~"} 
            />
        </div>
    );
}

export default CommentList;
