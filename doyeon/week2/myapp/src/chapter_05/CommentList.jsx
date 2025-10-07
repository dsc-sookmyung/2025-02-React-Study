import React from "react";
import Comment from "./Comment";
import profile1 from "../img/profile1.jpg";
import profile2 from "../img/profile2.jpg";
import profile3 from "../img/profile3.jpg";

const comments = [
    {
        name: "권도연",
        comment: "안녕하세요, 권도연입니다.",
        image: profile1,
    },
    {
        name: "James",
        comment: "Hello, I'm James.",
        image: profile2,
    },
    {
        name: "Emily",
        comment: "안녕하세요, Emily입니다.",
        img: profile3,
    },
]

function CommentList(props) {
        return(
            <div>
                {comments.map((comment) => {
                    return (
                        <Comment name={comment.name} comment={comment.comment} image={comment.image}/>
                );
                })}
            </div>
        )
}   

export default CommentList;