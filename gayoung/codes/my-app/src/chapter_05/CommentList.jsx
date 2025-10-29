import React from "react";
import Comment from "./Comment";

import user1 from "../img/user1.jpg";
import user2 from "../img/user2.png";
import user3 from "../img/user3.jpeg";

const comments = [
  {
    name: "GDGoC Sookmyung",
    comment: "리액트 스터디 2주차",
    profile: user1,
  },
  {
    name: "쥐",
    comment: "찍찍찍",
    profile: user2,
  },
  {
    name: "유가영",
    comment: "차근차근 배워봅시다",
    profile: user3,
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