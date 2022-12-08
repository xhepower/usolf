import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useJwt } from "react-jwt";
import "../styles/Login.scss";
import "../styles/Home.scss";
import logo from "@logos/logo_yard_sale.svg";
import { authSchema } from "@schemas/auth.schema";
import authService from "@services/auth.service";
import datoService from "@services/dato.service";
import Paginacion from "../components/Paginacion";
import ItemUser from "../components/ItemUser";

function Users() {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState([]);
  const [errors, setErrors] = useState([]);
  const [firstTry, setFirstTry] = useState(true);
  const [datos, setDatos] = useState([]);
  const form = useRef(null);
  const initialState = {
    id: "",
    email: "",
    role: "",
    password: "",
  };
  const eliminar = (id) => {
    if (confirm("Desea eliminar este usuario")) {
      datoService.deleteUser(id);
    }
  };
  const guardarToken = (token) => {
    localStorage.setItem("token", token);
  };
  const obtenerToken = () => {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    return token;
  };

  const handleSave = async (data) => {
    const datos = { errors: null, token: null };
    setIsLoading(true);
    try {
      const rta = await datoService.saveUser(data);

      setIsLoading(false);
    } catch (error) {
      datos.errors = error.response.status;
      setIsLoading(false);
    }

    return datos;
  };
  const handleSubmit = async (event) => {
    const pregunta = confirm("¿Desea guardar este usuario?");
    if (pregunta) {
      event.preventDefault();
      const formData = new FormData(form.current);
      const data = {
        email: formData.get("email"),
        password: formData.get("password"),
        role: formData.get("role"),
      };
      setFirstTry(false);
      const rta = await handleSave(data);
      setErrors(rta.errors);
      setToken(rta.token);
    }
  };
  useEffect(() => {
    retrieve();
  }, []);
  const retrieve = async () => {
    try {
      setDatos((await datoService.getUsers()).data);
    } catch (error) {
      window.location.href = "/";
    }
  };

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
        <form className="form userform" ref={form}>
          <p className="form-titulo">Crear nuevo usuario</p>
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
          <label htmlFor="password" className="label">
            Rol
          </label>
          <select
            name="role"
            defaultValue="user"
            className="input input-password"
          >
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>

          <input
            className="primary-button login-button"
            value="Guardar"
            type="submit"
            onClick={handleSubmit}
          ></input>
        </form>

        <div>
          <table className="tableUser">
            <thead>
              <tr>
                <th> Usuario</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {datos.map((r) => {
                return (
                  <tr key={r.id}>
                    <td>{r.email}</td>
                    <td>{r.role}</td>
                    <td>
                      <button
                        className="btnEliminar"
                        onClick={() => {
                          eliminar(r.id);
                        }}
                      >
                        eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
