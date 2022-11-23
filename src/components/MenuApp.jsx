import React from "react";
import { Link } from "react-router-dom";

function MenuApp() {
  const handleClickSalir = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="menu-container">
      <nav className="nav-app">
        <div className="salir">
          <Link to="/users" onClick={handleClickSalir}>
            Salir
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default MenuApp;
