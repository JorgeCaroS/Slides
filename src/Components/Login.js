import React from "react";
import logo from "../logo.svg";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import base from "../base";

export default function Login() {
  const [usuario, setUsuario] = useState();
  const myInput = React.createRef();
  const history = useHistory();

  const goHome = (event) => {
    event.preventDefault();

    const user = myInput.current.value;
    setUsuario(user);
    history.push(`/Home/${user}`);
  };
  console.log(usuario);

  return (
    <div>
      <div className="Slides">
        <img src={logo} className="App-logo" alt="logo" width="100px" />
        <h1>Login </h1>

        <form className="Input" onSubmit={goHome}>
          <input
            className="mail"
            ref={myInput}
            type="text"
            required
            placeholder="User"
          />
          <br></br>
          <input
            className="password"
            type="text"
            required
            placeholder="Password"
          />
          <br></br>
          <button className="log" type="submit">
            {" "}
            Login{" "}
          </button>
          <br></br>
        </form>
      </div>
    </div>
  );
}
