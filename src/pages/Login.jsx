import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Login.scss";
import "../styles/Home.scss";
import logo from "@logos/logo_yard_sale.svg";
import { authSchema } from "@schemas/auth.schema";
import authService from "@services/auth.service";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState([]);
  const [errors, setErrors] = useState([]);
  const [firstTry, setFirstTry] = useState(true);
  const form = useRef(null);

  const guardarToken = (token) => {
    localStorage.setItem("token", token);
  };
  const obtenerToken = () => {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    return token;
  };
  const handleLogin = async (data) => {
    const datos = { errors: null, token: null };
    setIsLoading(true);
    try {
      const rta = await authService.login(data);
      datos.token = rta.data.token;
      guardarToken(rta.data.token);
      setIsLoading(false);
    } catch (error) {
      datos.errors = error.response.status;
      setIsLoading(false);
    }
    return datos;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    setFirstTry(false);
    const rta = await handleLogin(data);
    setErrors(rta.errors);
    setToken(rta.token);
    console.log(obtenerToken());
  };
  if (obtenerToken()) {
    window.location.href = "/";
  }
  return (
    <div className="Login">
      {isLoading ? (
        <div className="loading-container">
          <p className="loading-text">Cargando. Espere...</p>
        </div>
      ) : null}
      {errors && !firstTry && !isLoading ? (
        <div className="error-container">
          <p className="error-text">Error de autenticación</p>
        </div>
      ) : null}
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form className="form" ref={form}>
          <label htmlFor="email" className="label">
            Correo eléctronico
          </label>
          <input
            type="email"
            name="email"
            placeholder="Ingrese aquí su correo electrónico"
            className="input input-email"
            required
          />
          <label htmlFor="password" className="label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
            required
          />
          <input
            className="primary-button login-button"
            value="Entrar"
            type="submit"
            onClick={handleSubmit}
          ></input>
          <a href="/recovery-password">Olvidé mi contraseña</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
