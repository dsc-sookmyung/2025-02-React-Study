import React, { useContext } from "react";

import ThemeContext from "./ThemeContext";
import Card from "./Card";

export default function ProfileCard({ title, img, text }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Card text={text}>
      <div
        style={{
          display: "flex",
          color: `${theme === "light" ? "black" : "white"} `,
        }}
      >
        <img
          src={img}
          style={{
            width: "6rem",
            height: "6rem",
            borderRadius: "50%",
            marginRight: "1rem",
          }}
        />
        <h2>{title}</h2>
      </div>
    </Card>
  );
}