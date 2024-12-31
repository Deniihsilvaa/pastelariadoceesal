import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import { Header } from "./components/layout/Header";
import Rota from "./hooks/Rota";  // Corrigida a importação
import './styles/index.css'
function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Rota />
      </AuthProvider>
    </Router>
  );
}

export default App;
