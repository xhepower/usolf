import React from "react";
import MenuApp from "./MenuApp";
import logo from "../../public/assets/logos/logo_yard_sale.svg";
function Header() {
  return (
    <header>
      <div className="nav-logocontainer"></div>
      <div className="cajaTitulo">
        <div className="cajaTitulo-texto">
          <h1>USA SOLUTIONS</h1>
        </div>
      </div>
      <hr />
      <MenuApp></MenuApp>
    </header>
  );
}

export default Header;
