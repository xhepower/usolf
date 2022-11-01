import React from "react";
import Header from "../components/Header";

function AppLayout({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
}

export default AppLayout;
