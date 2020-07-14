import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Slide({
  select,
  source,
  name,
  selected,
  click,
  clicked,
}) {
  function getSrc() {
    click(source, name);
    console.log(name);
  }
  function getName() {
    select(name);
  }

  return (
    <div className="container">
      <img
        alt="singleImage"
        //className={selected ? "Slides-main1" :  "Slides-main2"}
        className={
          clicked ? "Slides-main3" : selected ? "Slides-main1" : "Slides-main2"
        }
        key={"null"}
        src={source}
        onClick={getName}
      />

      <button className={selected ? "btn2" : "btn1"} onClick={getSrc}>
        Push Slide{" "}
      </button>
    </div>
  );
}
