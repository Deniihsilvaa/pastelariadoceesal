import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../contexts/AuthContext"; // Importa o contexto de autenticação
import { Navigate } from "react-router-dom";

const Rota = () => {
  const { user } = useAuth(); // Obtém o papel do usuário logado

  return (
    <Routes>
      {/* Rota de Login */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/restaurant/:id" element={<RestaurantPage />} />
        </Routes>

      {/* Rotas protegidas para Admin */}
      <Route
        path="/admin/*"
      >

      </Route>


      {/* Outras rotas */}
      <Route path="*" element={<NotUse />} />

    </Routes>
  );
};

export default Rota;
