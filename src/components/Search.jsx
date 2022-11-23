import React, { useState, useEffect } from "react";
const handleClickBuscar = () => {};
function Search(props) {
  const { datos, setLosDatos } = props;
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  const filtrar = () => {
    setLosDatos(
      datos.filter(
        (item) =>
          item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
      )
    );
  };
  const [searchValue, setSearchValue] = useState("");
  const [selectedElement, setSelectedElement] = useState([]);
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
              defaultChecked
            />
            <label htmlFor="fechaTodos">Todos</label>
          </div>
          <div className="select-group">
            <input
              type="radio"
              id="fechaIntervalo"
              name="fechaFilter"
              defaultValue="fechaintervalo"
            />
            <label htmlFor="fechaIntervalo">Intervalo</label>
            <div className="intervalo-group">
              <label htmlFor="intervaloDesde">Desde</label>
              <br></br>
              <input
                type="date"
                id="intervaloDesde"
                name="intervalo"
                className="intervalo-hasta"
                defaultValue="2022-01-01"
              />
              <br></br>
              <label htmlFor="intervaloHasta">Hasta</label>
              <br></br>
              <input
                type="date"
                className="intervalo-hasta"
                id="intervaloHasta"
                name="intervalo"
                defaultValue="2022-01-01"
              />
            </div>
          </div>
        </div>
        <div className="search-group">
          <label>Estado de la solicitud</label>
          <select className="select-estado" name="select" defaultValue="todos">
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
