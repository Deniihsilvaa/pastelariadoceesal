// src/app.tsx
import { PrimeReactProvider } from "primereact/api";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Header } from "./components/layout/Header";
import Rota from "./hooks/Rota.tsx";

const App: React.FC> = () => {
  return (
    <PrimeReactProvider value={{ unstyled: true }}>
    <Router>
      <AuthProvider>
        <Header />
        <Rota />
      </AuthProvider>
    </Router>
    </PrimeReactProvider>
  );
}

export default App;


