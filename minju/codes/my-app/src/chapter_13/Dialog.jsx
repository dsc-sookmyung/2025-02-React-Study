import React from "react";

import FancyBorder from "./FancyBorder";

export default function Dialog({ title, message, children }) {
  return (
    <FancyBorder>
      <h1 className="Dialog-title">{title}</h1>
      <p className="Dialog-message">{message}</p>
      {children}
    </FancyBorder>
  );
}
