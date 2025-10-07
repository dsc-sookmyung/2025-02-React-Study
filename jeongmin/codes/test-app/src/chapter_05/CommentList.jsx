import React from "react";
import Comment from "./Comment";

import profile1 from "../img/profile1.png";
import profile2 from "../img/profile2.png";
import profile3 from "../img/profile3.png";

const comments = [
  {
    name: "GDGoC",
    comment: "안녕하세요!",
    profile: profile1,
  },
  {
    name: "오정민",
    comment: "해피추석~",
    profile: profile2,
  },
  {
    name: "눈송이",
    comment: "리액트 스터디 2주차",
    profile: profile3,
  },
];

function CommentList() {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          name={comment.name}
          comment={comment.comment}
          profile={comment.profile}
        />
      ))}
    </div>
  );
}

export default CommentList;