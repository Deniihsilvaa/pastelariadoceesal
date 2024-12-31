import { Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts/useAuth.tsx";
import { AuthForm } from '../components/AuthForm.tsx';
import { HomePage } from '../pages/HomePage';
import { RestaurantPage } from '../pages/RestaurantPage';

const Rota = () => {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/profile" element={<HomePage />} />

      {/* Rotas privadas */}
    </Routes>
  );
};

export default Rota;
