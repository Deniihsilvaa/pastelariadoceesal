import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import { Header } from "./components/layout/Header";
import Rota from "./hooks/Rota";
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

import { PrimeReactProvider } from "primereact/api";
...
return(
    <PrimeReactProvider value={{ unstyled: true }}>
        <App />
    </PrimeReactProvider>
)
