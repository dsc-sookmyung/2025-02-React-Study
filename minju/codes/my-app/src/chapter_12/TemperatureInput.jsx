import React, { useState } from "react";

const scaleNames = {
  c: "섭씨",
  f: "화씨",
};

export default function TemperatureInput({
  temperature,
  onTemperatureChange,
  scale,
}) {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };
  return (
    <fieldset>
      <legend>온도를 입력해 주세요(단위:{scaleNames[scale]}): </legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
}
