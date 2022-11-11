import http from "../http-commons";
const obtenerToken = () => {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  return token;
};
http.defaults.headers.common = { Authorization: `bearer ${obtenerToken()}` };
//const axios = require("axios").default;
class datoService {
  getAll() {
    return http.get("/pdfs");
  }

  findByTitle(title) {
    return http.get(`/datos?nombre=${title}`);
  }
  getPDf() {
    return http.get(
      `https://dd.unah.edu.hn/dmsdocument/5284-normas-academica-de-la-unah-pdf`
    );
  }
}
export default new datoService();
