import { Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts/useAuth.tsx";
import { AuthForm } from '../components/AuthForm.tsx';
import { HomePage } from '../pages/HomePage';
import { RestaurantPage } from '../pages/RestaurantPage';

const Rota = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/profile" element={<HomePage />} />
      <Route path="/restaurant/:id" element={<RestaurantPage />} />

      {/* Rotas protegidas (exemplo) */}
      {user && (
        <Route path="/admin/*" element={<div>Painel Admin</div>} />
      )}

      {/* Redirecionamento para Home se a rota não existir */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default Rota;
