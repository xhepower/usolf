import React from "react";

function Home() {
  const obtenerToken = () => {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    return token;
  };
  if (!obtenerToken()) {
    window.location.href = "/login";
  }
  return <div>Home</div>;
}

export default Home;
