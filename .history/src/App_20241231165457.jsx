import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { PrimeReactProvider } from "primereact/api";
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


...
return(
    <PrimeReactProvider value={{ unstyled: true }}>
        <App />
    </PrimeReactProvider>
)
