import React, { useState } from "react";

export default function ConfirmButton() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  return (
    <button
      onClick={() => {
        setIsConfirmed((prev) => !prev);
      }}
      disabled={isConfirmed}
    >
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}
