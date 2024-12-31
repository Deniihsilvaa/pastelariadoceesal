// src/app.tsx
import { PrimeReactProvider } from "primereact/api";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Rota from "./hooks/Rota.tsx";
import Layout from "./components/layout/Layout";

const App: React.FC = () => {
  return (
    <PrimeReactProvider value={{ unstyled: true }}>
      <Router>
        <AuthProvider>
          <Layout>
            <Rota />
          </Layout>
        </AuthProvider>
      </Router>
    </PrimeReactProvider>
  );
};

export default App;
