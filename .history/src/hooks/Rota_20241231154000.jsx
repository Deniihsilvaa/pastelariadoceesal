import { Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Importa o contexto de autenticação
import { AuthForm } from '../components/AuthForm.tsx';
import { HomePage } from '../pages/HomePage';
import { RestaurantPage } from '../pages/RestaurantPage';
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

      <Route path="*" element={<HomePage />} />

    </Routes>
  );
};

export default Rota;
