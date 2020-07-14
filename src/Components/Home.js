import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../logo.svg";
//import imagenes from "../imagenes";
import { useFirebaseApp } from "reactfire";
import Slide from "./Slide";
import { Link } from "react-router-dom";
import "firebase";
import { Connect } from "../Components/Connect";

export default function Home() {
  let imagenes = [
    {
      nombre: "Numero1",
      image:
        "http://aprendiendoconjulia.com.s168-177.furanet.com/wp-content/uploads/2015/01/61ea1e49191f59bc47267b057b3dd39a.jpg",
    },

    {
      nombre: "Numero2",
      image:
        "http://aprendiendoconjulia.com.s168-177.furanet.com/wp-content/uploads/2015/01/6015c2297cb2bbaee7681a223bbff463.jpg",
    },
    {
      nombre: "Numero3",
      image:
        "http://aprendiendoconjulia.com.s168-177.furanet.com/wp-content/uploads/2015/01/2723366e2ae026b5e322783039c2477e.jpg",
    },
  ];
  const firebase = useFirebaseApp();
  const [usuario, setUsuario] = useState();
  const [slides, setSlides] = useState([]);
  const [fileURL, setFileURL] = useState();
  const [fileName, setFileName] = useState();
  const [current, setCurrent] = useState(
    "https://www.proyectoalfa.es/wp-content/uploads/2019/02/hello.gif"
  );

  const [nameSelected, setSelected] = useState();
  const [elementClicked, setClicked] = useState();

  const [users, setUsers] = useState("null");
  const params = useParams();
  const db = Connect.firestore();

  const logout = async () => {
    await firebase.auth().signOut();
  };

  function updateUser() {
    setUsuario(params.User);
  }

  function handleSelect(name) {
    setSelected(name);
  }

  //Corre en el boton "Push Slide"
  function handleClicked(src, name) {
    setCurrent(src); // Envia link de imagen Clickeada a Slide Actual
    setClicked(name); // Envia nombre de Slide Clickeado a ElementClicked
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const a = { nombre: fileName, image: fileURL };
    db.collection("users")
      .doc(usuario)
      .set({
        user: usuario,
        slides: slides.push(a),
      });

    console.log(slides);
  };

  const onChange = async (e) => {
    const slide = e.target.files[0];
    const storageRef = Connect.storage().ref();
    const slideRef = storageRef.child(slide.name);
    await slideRef.put(slide);
    setFileURL(await slideRef.getDownloadURL());
    setFileName(await slideRef.location.path);

    console.log(slideRef.location.path);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollections = await db.collection("users").get();
      setUsers(
        usersCollections.docs.map((doc) => {
          return doc.data();
        })
      );
     
    };
    fetchUsers();
  }, []);

  return (
    <div className="Main">
      <div className="Slides">
        <div className="Profile-left">
          <img src={logo} className="App-logo" alt="logo" width="100px" />
        </div>

        <div className="Profile-right">
          <img
            src={"https://cdn.mydance.zone/img/icons/profileUser.png"}
            alt="logo"
            width="70px"
          />
          <p> {usuario} </p>

          <button onClick={logout}>
            {" "}
            <Link to="/"> Logout</Link>
          </button>
        </div>
      </div>

      <div className="Title">
        <div className="Current" onLoad={updateUser}>
          <form onSubmit={onSubmit}>
            <p>Upload Files </p>
            <input type="file" onChange={onChange} />
            <button> Upload </button>
          </form>
          <br></br>
          <br></br>
          <picture>
            <img className="Current-img" src={current} />
          </picture>
        </div>

        <div className="Gallery">
          { slides.map((slide) => (
            <Slide
              key={slide.nombre}              
              source={slide.image}
              select={handleSelect}
              selected={nameSelected === slide.nombre}
              click={handleClicked}
              clicked={elementClicked === slide.nombre}
              name={slide.nombre}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

//new lines//
