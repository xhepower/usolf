import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
const handleClickBuscar = () => {};
function Search(props) {
  const { datos, setLosDatos } = props;
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  const onEstadoChange = (e) => {
    setEstadoValue(e.target.value);
  };
  const onFechaFilterChange = (e) => {
    setFechaFilter(e.target.value);
  };
  const onFechaDesdeChange = (e) => {
    setFechaDesde(e.target.value);
  };

  const onFechaHastaChange = (e) => {
    setFechaHasta(e.target.value);
  };
  const visibleIntervalo = () => {
    if (fechaFilter != "intervalo") {
      return "intervaloHidden";
    } else {
      return null;
    }
  };
  const filtrar = () => {
    console.log(estadoValue);
    if (fechaFilter == "intervalo") {
      if (fechaDesde > fechaHasta) {
        alert("Los intervalos de fechas están mal colocados");
        return;
      }
    }
    setLosDatos(
      datos
        .filter((item) => {
          if (searchValue == "") {
            return true;
          }
          return (
            item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
          );
        })
        .filter((item) => {
          if (fechaFilter == "todos") {
            return true;
          } else {
            console.log("Fecha pdf", item.date);
            if (item.date >= fechaDesde && item.date <= fechaHasta) {
              return true;
            } else {
              return false;
            }
          }
        })
        .filter((item) => {
          if (estadoValue == "todos") {
            return true;
          }
          return item.estado == estadoValue;
        })
    );
  };
  const [searchValue, setSearchValue] = useState("");
  const [estadoValue, setEstadoValue] = useState("todos");
  const [fechaFilter, setFechaFilter] = useState("todos");
  const [fechaDesde, setFechaDesde] = useState(new Date().now);
  const [fechaHasta, setFechaHasta] = useState(new Date().now);
  const [intervaloVisible, setIntervaloVisible] = useState(null);
  return (
    <div>
      <div className="search-container">
        <div className="search-group">
          <div className="text-container">
            <label htmlFor="textbusqueda">Búsqueda por nombre</label>
            <input
              type="text"
              id="textBusqueda"
              className="inputBusqueda"
              placeholder="Buscar por nombre"
              value={searchValue}
              onChange={onSearchValueChange}
            />
            <button className="btnbuscar boton" type="button" onClick={filtrar}>
              <span className="icon">
                <i className="fa fa-search"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="search-group">
          <div className="select-group">
            <input
              type="radio"
              id="fechaTodos"
              name="fechaFilter"
              value="todos"
              onChange={onFechaFilterChange}
              checked={fechaFilter == "todos"}
            />
            <label htmlFor="fechaTodos">Todos</label>
          </div>
          <div className="select-group">
            <input
              type="radio"
              id="fechaIntervalo"
              name="fechaFilter"
              value="intervalo"
              onChange={onFechaFilterChange}
              checked={fechaFilter == "intervalo"}
            />
            <label htmlFor="fechaIntervalo">Intervalo</label>
            <div className={`intervalo-group ${visibleIntervalo()}`}>
              <label htmlFor="intervaloDesde">Desde</label>
              <br></br>
              <input
                type="date"
                id="intervaloDesde"
                name="intervalo"
                defaultValue="2022-01-01"
                className="intervalo-hasta"
                onChange={onFechaDesdeChange}
              />
              <br></br>
              <label htmlFor="intervaloHasta">Hasta</label>
              <br></br>
              <input
                type="date"
                className="intervalo-hasta"
                defaultValue="2022-01-01"
                id="intervaloHasta"
                name="intervalo"
                onChange={onFechaHastaChange}
              />
            </div>
          </div>
        </div>
        <div className="search-group">
          <label>Estado de la solicitud</label>
          <select
            className="select-estado"
            name="select"
            defaultValue="todos"
            onChange={onEstadoChange}
          >
            <option value="todos">Todos</option>
            <option value="proceso">En proceso</option>
            <option value="embajada">En la embajada</option>
            <option value="recogido">Recogido</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;
