import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../logo.svg";
import imagenes from "../imagenes";
import { useFirebaseApp } from "reactfire";
import Slide from "./Slide";

export default function Home() {
  const [usuario, setUsuario] = useState();
  const [slides, setSlides] = useState(imagenes);
  const [current, setCurrent] = useState(
    "https://media.wponlinesupport.com/wp-content/uploads/2019/04/slider-pack.png"
  );
  
  const [nameSelected, setSelected] = useState();

  const params = useParams();

  function updateUser() {
    setUsuario(params.User);
  }

  function handleSelect(src, name) {
    setCurrent(src);
    setSelected(name);
  }

  
  return (
    <div className="Slides">
      <img src={logo} className="App-logo" alt="logo" width="100px" />
      <div className="Title">
        <p> {usuario}'s Slides </p>


        <div className="Current" onLoad={updateUser}>
          <picture>
            <img className="Current-img" src={current} />
          </picture>
        </div>

        <div className="Gallery">
          {slides.map((slide) => (
            <Slide
              key={slide.nombre}
              source={slide.image}
              select={handleSelect}
              selected={nameSelected === slide.nombre }
              name={slide.nombre}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
