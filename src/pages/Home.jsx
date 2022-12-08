import React, { useState, useEffect } from "react";
import background from "../../public/assets/images/background.jpg";
import Search from "../components/Search";
import Paginacion from "../components/Paginacion";
import Lista from "../components/Lista";
import service from "../services/dato.service";
import datoService from "../services/dato.service";
import Visor from "../components/Visor";
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
  const [losDatos, setLosDatos] = useState([]);
  const [archivo, setArchivo] = useState([]);
  const [datosIniciales, setDatosIniciales] = useState([]);
  const [file, setFile] = useState("");
  useEffect(() => {
    retrieve();
  }, []);
  const retrieve = async () => {
    try {
      setDatos((await datoService.getAll()).data);
      setLosDatos((await datoService.getAll()).data);
    } catch (error) {
      window.location.href = "/login";
    }
  };

  return (
    <div className="home-container">
      <Search setLosDatos={setLosDatos} datos={datos}></Search>
      <Paginacion
        losDatos={losDatos}
        pageLimit={5}
        pageNeighbours={1}
        setFile={setFile}
      ></Paginacion>
      <Visor file={file}></Visor>
    </div>
  );
}

export default Home;
