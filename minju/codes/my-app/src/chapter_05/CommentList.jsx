import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "정민주",
    comment: "쉬고 싶습니다.",
  },
  {
    name: "조예인",
    comment: "휴식이 필요합니다.",
  },
  {
    name: "권도연",
    comment: "과제중입니다.",
  },
  {
    name: "유가영",
    comment: "강의를 보고 있습니다.",
  },
  {
    name: "오정민",
    comment: "깃 사용 중입니다.",
  },
  {
    name: "한지민",
    comment: "제출했습니다.",
  },
];

export default function CommentList() {
  return (
    <div>
      {comments.map((c) => (
        <Comment name={c.name} comment={c.comment} />
      ))}
    </div>
  );
}
