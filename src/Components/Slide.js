import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Slide({ select, source, name, selected }) {
  function getCurrent() {
    select(source, name);
 
  }

  return (
    <div className="container">
      <img
        alt="singleImage"
        className={selected ? "Slides-main1" : "Slides-main2"}
        key={"null"}
        src={source}
        onClick={getCurrent}
      />

      <button className={selected ? "btn2" : "btn1"}> Push Slide </button>
    </div>
  );
}
