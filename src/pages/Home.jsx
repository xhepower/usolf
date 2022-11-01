import React, { useState, useEffect } from "react";
import background from "../../public/assets/images/background.jpg";
import Search from "../components/Search";
import Paginacion from "../components/Paginacion";
import Lista from "../components/Lista";
import service from "../services/dato.service";
import datoService from "../services/dato.service";
function Home() {
  const obtenerToken = () => {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    return token;
  };
  if (!obtenerToken()) {
    window.location.href = "/login";
  }
  const initialState = {
    id: "",
    name: "",
    date: "",
    idNumber: "",
    city: "",
    passport: "",
    phone: "",
    file: "",
  };
  const [datos, setDatos] = useState([]);
  const [archivo, setArchivo] = useState([]);
  const [datosIniciales, setDatosIniciales] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    retrieve();
  }, []);
  const retrieve = async () => {
    const losdatos = await datoService.getAll();
    setDatos(losdatos.data);
  };
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <Search setDatos={setDatos} datos={datos}></Search>
      <Paginacion data={datos}></Paginacion>
    </>
  );
}

export default Home;
