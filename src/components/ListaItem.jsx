import React from "react";

function ListaItem(props) {
  const { dato, setFile } = props;
  const formatearFecha = (fecha) => {
    let fechita = new Date(fecha);
    return (
      fechita.getDate() +
      1 +
      "/" +
      (fechita.getMonth() + 1) +
      "/" +
      fechita.getFullYear()
    );
  };
  const imprimir = () => {
    setFile(dato.file);
  };
  return (
    <tr>
      <td>{formatearFecha(dato.date)}</td>
      <td>{dato.name}</td>
      <td>{dato.estado}</td>
      <td>
        <button type="button" onClick={imprimir} className="btnVer">
          <span className="icon">
            <i className="fa fa-eye"></i>
          </span>
        </button>
      </td>
    </tr>
  );
}

export default ListaItem;
