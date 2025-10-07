import React from "react";
import Comment from "./comment";

import user1 from "../img/user1.PNG";
import user2 from "../img/user2.PNG";
import logo192 from "../img/logo192.png";

const comments = [
  {
    name: "GDGoC Sookmyung",
    comment: "수요일 7시 정기 세션",
    profile: user1,
  },
  {
    name: "한지민",
    comment: "GDGoC 최고 ! React Study도 최고 !",
    profile: user2,
  },
  {
    name: "React",
    comment: "리액트를 배워요!",
    profile: logo192,
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} profile={comment.profile} />;
      })}
    </div>
  );
}

export default CommentList;