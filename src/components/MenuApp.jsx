import React from "react";
import { Link } from "react-router-dom";
import datoService from "@services/dato.service";
import { useJwt } from "react-jwt";
function MenuApp() {
  const handleClickSalir = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const obtenerToken = () => {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    return token;
  };
  let visibilidad;
  if (obtenerToken() != null) {
    const { decodedToken, isExpired } = useJwt(obtenerToken());
    console.log(Object(decodedToken).role);
    if (Object(decodedToken).role == "admin") {
      visibilidad = "visible";
    } else {
      visibilidad = "no-visible";
    }
  }

  return (
    <div className="menu-container">
      <nav className="nav-app">
        <div className="salir">
          <Link to="/">Inicio</Link>
          <Link to="/users" className={visibilidad}>
            Usuarios
          </Link>

          <Link to="/users" onClick={handleClickSalir}>
            Salir
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default MenuApp;
