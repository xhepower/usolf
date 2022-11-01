import React from "react";
const handleClickBuscar = () => {};
function Search() {
  return (
    <div className="search-container">
      <div className="search-group">
        <div className="item-busqueda">
          <input type="text" name="textoBusqueda" defaultValue="Busqueda" />
        </div>
      </div>
      <div className="search-group">
        <div className="item-busqueda">
          <input
            type="radio"
            name="radioBusqueda"
            defaultValue="today"
            id="today"
          />
          <label htmlFor="today">Hoy</label>
        </div>
        <div className="item-busqueda">
          <input
            type="radio"
            name="radioBusqueda"
            defaultValue="thisWeek"
            id="thisWeek"
          />
          <label htmlFor="thisWeek">Esta semana</label>
        </div>
        <div className="item-busqueda">
          <input
            type="radio"
            name="radioBusqueda"
            defaultValue="thisMonth"
            id="thisMonth"
          />
          <label htmlFor="thisMonth">Este mes</label>
        </div>
        <div className="item-busqueda">
          <form>
            <input type="text" id="textDesde" />
            <label htmlFor="today">Desde</label>
            <input type="text" id="textHasta" />
            <label htmlFor="today">Hasta</label>
            <input
              type="button"
              value="Buscar"
              onClick={handleClickBuscar}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
