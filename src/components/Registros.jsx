import React from "react";

import Lista from "./Lista";
import Search from "./Search";

function Registros() {
  return (
    <div>
      <Search></Search>
      <Lista>
        <ListaItem />
      </Lista>
    </div>
  );
}

export default Registros;
