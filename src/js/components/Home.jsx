import React from "react";
import { useState } from "react";
import "../../styles/index.css";

const Home = () => {
  const [color, setColor] = useState("red");

  return (
    <div>
      <div class="up"></div>
      <div class="trafic">
        <div
          onClick={() => setColor("red")}
          className={color === "red" ? "lightred" : "red"}
        ></div>

        <div
          onClick={() => setColor("yellow")}
          className={color === "yellow" ? "lightyellow" : "yellow"}
        ></div>

        <div
          onClick={() => setColor("green")}
          className={color === "green" ? "lightgreen" : "green"}
        ></div>
      </div>
    </div>
  );
};

export default Home;
