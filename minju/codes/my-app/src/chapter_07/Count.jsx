import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount((prev) => prev + 1)}>클릭</button>
    </div>
  );
}
