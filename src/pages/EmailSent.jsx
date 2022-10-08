import React from "react";

function EmailSent() {
  const handleClick = () => {
    window.location.href = "/";
  };
  return (
    <div className="login">
      <div className="login-container">
        <h1> "El email ha sido enviado</h1>
        <button onClick={handleClick}>Regresar al home</button>
      </div>
    </div>
  );
}

export default EmailSent;
