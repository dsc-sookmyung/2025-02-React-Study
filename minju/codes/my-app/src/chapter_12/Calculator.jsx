import React, { useState } from "react";

import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";
import { toCelcius, toFahrenheit, tryConvert } from "./utils";

export default function Calculator({}) {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setScale("c");
  };
  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setScale("f");
  };
  const celsius =
    scale === "f" ? tryConvert(temperature, toCelcius) : temperature;
  const fahrenheight =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheight}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}
