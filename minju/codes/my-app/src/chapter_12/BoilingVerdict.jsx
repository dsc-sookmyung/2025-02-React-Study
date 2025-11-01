import React from "react";

export default function BoilingVerdict({ celsius }) {
  return (
    <div>
      {celsius >= 100 ? <p>물이 끓습니다.</p> : <p>물이 끓지 않습니다.</p>}
    </div>
  );
}
