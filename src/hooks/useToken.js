import { useEffect, useState } from "react";

const useToken = () => {
  const guardarToken = (token) => {
    localStorage.setItem("token", token);
  };
  const obtenerToken = () => {
    const token = localStorage.getItem("token");
    return token;
  };
  return [guardarToken, obtenerToken];
};

export default useToken;
