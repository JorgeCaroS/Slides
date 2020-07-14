import React from "react";
import logo from "../logo.svg";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";

//jorgecaro.ing@gmail.com
export default function Login() {
  const firebase = useFirebaseApp();
  const [usuario, setUsuario] = useState();
  const [password, setPassword] = useState();
  const myInput = React.createRef();
  const history = useHistory();

  const submit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(usuario, password);
    console.log(usuario, password);
  };

  const login = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(usuario, password)
      .then(function (success) {
        const user = myInput.current.value;
        setUsuario(user);
        history.push(`/Home/${user}`);
        console.log(usuario, password);
      })
      .catch(function (error) {
        alert("Fallo autenticación.");
      });
  };

  const goHome = (event) => {
    event.preventDefault();
    const user = myInput.current.value;
    setUsuario(user);
  
  };

  return (
    <div>
      <div className="Main1">
        <img src={logo} className="App-logo" alt="logo" width="100px" />
        <h1>Login </h1>

        <form className="Input" onSubmit={goHome}>
          <input
            className="mail"
            ref={myInput}
            type="text"
            required
            placeholder="Mail"
            onChange={(e) => setUsuario(e.target.value)}
          />
          <br></br>
          <input
            className="password"
            type="text"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button className="log" type="submit" onClick={login}>
            {" "}
            Login{" "}
          </button>
          <br></br>

          <button className="reg" type="submit" onClick={submit}>
            {" "}
            Registrarse{" "}
          </button>
          <br></br>
        </form>
      </div>
    </div>
  );
}
