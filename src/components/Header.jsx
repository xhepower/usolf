import React, { useState, useEffect } from "react";
import MenuApp from "./MenuApp";
import logo from "../../public/assets/logos/logo_yard_sale.svg";
import datoService from "@services/dato.service";
import { useJwt } from "react-jwt";
import Users from "../pages/Users";

function Header() {
  const [elUsuario, setElUsuario] = useState("");
  const obtenerToken = () => {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    return token;
  };
  const retrieve = () => {
    if (obtenerToken() != null) {
      const { decodedToken, isExpired } = useJwt(obtenerToken());
      //console.log(Object(decodedToken).role);
      setElUsuario(Object(decodedToken).email);
    }
  };
  useEffect(() => {}, []);
  return (
    <header>
      <div className="nav-logocontainer"></div>
      <div className="cajaTitulo">
        <div className="cajaTitulo-texto">
          <h1>USA SOLUTIONS</h1>
          <h2>{elUsuario}</h2>
        </div>
      </div>
      <hr />
      <MenuApp></MenuApp>
    </header>
  );
}

export default Header;
