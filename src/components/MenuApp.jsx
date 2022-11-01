import React from "react";
import { Link } from "react-router-dom";

function MenuApp() {
  return (
    <div className="menu-container">
      <nav className="nav-app">
        <div>
          <Link to="/">Registros</Link>
          <Link to="/users">Usuarios</Link>
        </div>
      </nav>
    </div>
  );
}

export default MenuApp;
