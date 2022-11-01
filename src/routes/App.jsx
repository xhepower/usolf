import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@containers/AppLayout";
import Login from "@pages/Login";
import Home from "@pages/Home";
import Cuentas from "@pages/Cuentas";
import Layout from "@containers/Layout";
import AppContext from "@context/AppContext";
import RecoveryPassword from "../pages/RecoveryPassword";
import ChangePassword from "../pages/ChangePassword";
import EmailSent from "../pages/EmailSent";
import PasswordChanged from "@pages/PasswordChanged";
import Registros from "../components/Registros";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <AppLayout>
                <Home />
              </AppLayout>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/recovery-password"
            element={<RecoveryPassword />}
          />
          <Route exact path="/email-sent" element={<EmailSent />} />
          <Route exact path="/recovery" element={<ChangePassword />} />
          <Route
            exact
            path="/password-recovery"
            element={<PasswordChanged />}
          />

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
    </Layout>
  );
};

export default App;
