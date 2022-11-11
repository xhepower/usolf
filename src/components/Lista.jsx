import React from "react";
import ListaItem from "./ListaItem";
function Lista(props) {
  const { datos, setFile } = props;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item) => (
            <ListaItem key={item.id} dato={item} setFile={setFile} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Lista;
