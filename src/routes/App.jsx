import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Cuentas from "@pages/Cuentas";
import Layout from "@containers/Layout";
import AppContext from "@context/AppContext";
import RecoveryPassword from "../pages/RecoveryPassword";
import ChangePassword from "../pages/ChangePassword";
import EmailSent from "../pages/EmailSent";
import PasswordChanged from "@pages/PasswordChanged";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/recovery-password" element={<RecoveryPassword />} />
        <Route exact path="/email-sent" element={<EmailSent />} />
        <Route exact path="/recovery" element={<ChangePassword />} />
        <Route exact path="/password-recovery" element={<PasswordChanged />} />

        <Route
          exact
          path="/cuentas"
          element={
            <Layout>
              <Cuentas />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
