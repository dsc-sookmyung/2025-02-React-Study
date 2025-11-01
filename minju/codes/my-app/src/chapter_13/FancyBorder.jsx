import React from "react";

export default function FancyBorder({ color, children }) {
  return <div className={"FancyBorder FancyBorder-" + color}>{children}</div>;
}
